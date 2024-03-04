import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { Task } from '../../../tasks/interfaces/task.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: User;
  @Input() assignedTasks: Task[] | null;
  @Output() onDelete: EventEmitter<null> = new EventEmitter<null>();
  @Output() onEdit: EventEmitter<null> = new EventEmitter<null>();

  public onEditUser(): void {
    this.onEdit.emit();
  }

  public onDeleteUser(): void {
    this.onDelete.emit();
  }

  public trackById(index: number, item: Task) {
    return item.id
  }
}
