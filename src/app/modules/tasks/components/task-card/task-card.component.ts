import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskState } from '../../enums/task-state.enum';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task;
  @Output() onDelete: EventEmitter<null> = new EventEmitter();
  @Output() onEdit: EventEmitter<null> = new EventEmitter();
  @Output() onAssignUserById: EventEmitter<string> = new EventEmitter();

  public onEditTask() {
    this.onEdit.emit();
  }

  public onDeleteTask() {
    this.onDelete.emit();
  }

  public assignUserById(userId: string) {
    this.onAssignUserById.emit(userId);
  }
}
