import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarManagerService } from '../../../shared/snackBar/services/snackbar-manager.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  constructor(
    private readonly tasksService: TasksService,
    private readonly router: Router,
    private readonly snackbarManagerService: SnackbarManagerService
  ) {
  }

  onCreateTask(task: Partial<Task>) {
    this.tasksService.create(task).subscribe(() => {
      this.router.navigate(['./tasks']);
      this.snackbarManagerService.openSnackBar('Task has been created');
    })
  }
}
