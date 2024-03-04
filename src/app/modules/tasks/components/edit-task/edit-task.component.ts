import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { SnackbarManagerService } from '../../../shared/snackBar/services/snackbar-manager.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {

  public task$: Observable<Task> = this.route.data.pipe(
    map((data: Data) => data['task'])
  );

  constructor(
    private readonly tasksService: TasksService,
    private readonly snackbarManagerService: SnackbarManagerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  public onEditTask(id: string, taskData: Partial<Task>) {
    this.tasksService.update(id, taskData).subscribe(() => {
      this.router.navigate(['./tasks'])
      this.snackbarManagerService.openSnackBar('Task has been updated');
    });
  }
}
