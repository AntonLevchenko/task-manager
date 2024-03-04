import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Output() onSubmit: EventEmitter<Partial<User>> = new EventEmitter<Partial<User>>;

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitForm() {
    if (!this.userForm.valid) {
      return;
    }
    this.onSubmit.emit(this.userForm.value as User);
  }

  private initForm(): void {
    if (this.user) {
      this.userForm.setValue({
        name: this.user.name
      })
    }
  }
}
