import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarManagerService } from '../../../shared/snackBar/services/snackbar-manager.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {

  public tasks$: Observable<Task[]> = this.tasksService.data$;

  constructor(
    private readonly tasksService: TasksService,
    private readonly snackbarManagerService: SnackbarManagerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  public deleteTask(id: string) {
    this.tasksService.delete(id).subscribe(() => {
      this.snackbarManagerService.openSnackBar('Task has been deleted');
    });
  }

  public assignUserById(id: string, userId: string) {
    this.tasksService.assignUser(id, userId).subscribe();
  }

  public editTask(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  public createTask() {
    this.router.navigate(['./new'], { relativeTo: this.route });
  }

  public trackById(index: number, item: Task) {
    return item.id
  }

}
