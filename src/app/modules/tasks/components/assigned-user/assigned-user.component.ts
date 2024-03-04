import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../users/services/users.service';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, take } from 'rxjs';
import { User } from '../../../users/interfaces/user.interface';

@Component({
  selector: 'app-assigned-user',
  templateUrl: './assigned-user.component.html',
  styleUrl: './assigned-user.component.scss'
})
export class AssignedUserComponent implements OnInit {
  @Input() assignedUserId: string | null;
  @Output() onAssignUserId: EventEmitter<string> = new EventEmitter();

  public control = new FormControl('');
  public options: User[] = [];
  public filteredOptions: Observable<User[]>;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    if (this.assignedUserId) {
      this.control.setValue(this.assignedUserId);
    }
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value || '')),
    );

    this.usersService.data$.pipe(
      take(1)
    ).subscribe((users: User[]) => {
      this.options = users;
    });
  }

  public onSelectionChange(event: any): void {
    this.onAssignUserId.emit(event.option.value);
  }

  private filter(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((item: User) => item.name.toLowerCase().includes(filterValue));
  }
}
