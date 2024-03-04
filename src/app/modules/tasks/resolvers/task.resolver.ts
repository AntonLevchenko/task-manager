import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Task } from '../interfaces/task.interface';
import { TasksService } from '../services/tasks.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class TaskResolver implements Resolve<Task> {
  constructor(
    private readonly tasksService: TasksService,
    private readonly router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Task> {
    const taskId = route.paramMap.get('id');
    if (!taskId) {
      this.redirectToErrorPage();
      return throwError(() => 'id was not provided');
    }

    return this.tasksService.getById(taskId).pipe(
      catchError((err) => {
        this.redirectToErrorPage();
        return throwError(err)
      })
    );
  }

  private redirectToErrorPage() {
    this.router.navigate(['./error']);
  }
}
