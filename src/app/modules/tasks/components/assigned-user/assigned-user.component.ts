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

  public control: FormControl<User> = new FormControl();
  public options: User[] = [];
  public filteredOptions: Observable<User[]>;
  public unselectedUserData: User = {} as User;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.assignUser();

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(this.unselectedUserData),
      map(value => this.filter(value)),
    );

    this.usersService.data$.pipe(
      take(1)
    ).subscribe((users: User[]) => {
      this.options = users;
    });
  }

  public onSelectionChange(event: any): void {
    this.onAssignUserId.emit(event.option.value.id);
  }

  private filter(value: User): User[] {
    const filterValue = value.name?.toLowerCase() ?? '';

    return this.options.filter((item: User) => item.name.toLowerCase().includes(filterValue));
  }

  public displayFn(user: User): string {
    return user?.name ?? '';
  }

  private assignUser() {
    if (this.assignedUserId) {
      this.usersService.getById(this.assignedUserId).pipe(
        take(1)
      ).subscribe((user: User) => {
        this.control.setValue(user);
      })
    }
  }
}
