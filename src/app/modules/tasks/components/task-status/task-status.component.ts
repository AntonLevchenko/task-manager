import { Component, Input, OnInit } from '@angular/core';
import { TaskState } from '../../enums/task-state.enum';
import { Task } from '../../interfaces/task.interface';
import { MatSelectChange } from '@angular/material/select';
import { TasksService } from '../../services/tasks.service';
import { catchError, EMPTY } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SnackbarManagerService } from '../../../shared/snackBar/services/snackbar-manager.service';
import { SnackbarTypes } from '../../../shared/snackBar/enum/snackbar-types.enum';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.scss'
})
export class TaskStatusComponent implements OnInit {
  @Input() task: Task;

  public selectedStatus: FormControl<TaskState> = new FormControl();
  public taskStates: TaskState[] = Object.values(TaskState);

  constructor(
    private readonly tasksService: TasksService,
    private readonly snackbarManagerService: SnackbarManagerService
  ) {
  }

  ngOnInit(): void {
    this.selectedStatus.setValue(this.task.status);
  }

  public changeState($event: MatSelectChange) {
    const status = $event.value;

    this.tasksService.updateState(this.task.id, status).pipe(
      catchError((err: string) => {
        this.snackbarManagerService.openSnackBar(err, SnackbarTypes.error);
        this.selectedStatus.setValue(TaskState.InQueue);
        return EMPTY;
      })
    ).subscribe();
  }
}
