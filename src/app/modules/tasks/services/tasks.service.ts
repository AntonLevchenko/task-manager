import { Injectable } from '@angular/core';
import { delay, forkJoin, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { TaskState } from '../enums/task-state.enum';
import { BaseDataManagerService } from '../../shared/services/base-data-manager.service';
import { v4 as uuidv4 } from 'uuid';
import { MOCK_TASKS_DATA } from '../../../mocks/tasks.mock';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends BaseDataManagerService<Task> {

  constructor() {
    super();
    this.dataSubject$.next(MOCK_TASKS_DATA)
  }

  override create(data: Partial<Task>) {
    const newData: Task = {
      id: uuidv4(),
      createDate: new Date(),
      editDate: new Date,
      status: TaskState.InQueue,
      ...data
    } as Task;

    return this.data$.pipe(
      map((item: Task[]) => item.push(newData)),
      take(1)
    );
  }

  override update(dataId: string, data: Partial<Task>): Observable<Task> {
    return this.getById(dataId).pipe(
      tap((item: Task) => {
        Object.assign(item, data, { editDate: new Date() });
      }),
      take(1)
    )
  }

  public assignUser(id: string, userId: string) {
    return this.update(id, { assignedUserId: userId }).pipe(
      switchMap(() => {
        return userId ? of() : this.resetState(id);
      }),
      take(1)
    );
  }

  public updateState(id: string, status: TaskState) {
    return this.getById(id).pipe(
      switchMap((item: Task) => {
        if (!item?.assignedUserId) {
          return throwError(() => 'Task should be assigned');
        }

        return forkJoin([this.getAssignedTasks(item?.assignedUserId!), of(item)]);
      }),
      switchMap(([assignedTasks, task]) => {
        if (assignedTasks.length && status === TaskState.InProgress) {
          return throwError(() => 'User already has task in progress');
        }

        return this.update(id, { status });
      }),
      take(1)
    )
  }

  public resetState(id: string): Observable<Task> {
    return this.update(id, { status: TaskState.InQueue });
  }

  public filterByUser(userId: string): Observable<Task[]> {
    return this.data$.pipe(
      map((tasks: Task[]) => tasks.filter((task: Task) => {
        return task.assignedUserId === userId;
      })),
      take(1)
    )
  }

  public unAssignAllUserTask(userId: string): Observable<Task[]> {
    return this.data$.pipe(
      map((tasks: Task[]) => tasks.map((task) => {
          if (task.assignedUserId === userId) {
            task.assignedUserId = null;
          }
          return task;
        })
      ),
      take(1)
    )
  }

  public getAssignedTasks(userId: string): Observable<Task[]> {
    return this.data$.pipe(
      map((tasks: Task[]) => tasks.filter((task: Task) => {
        return task.assignedUserId === userId && task.status === TaskState.InProgress;
      })),
      take(1)
    )
  }
}
