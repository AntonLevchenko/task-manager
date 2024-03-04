import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { SnackbarManagerService } from '../../../shared/snackBar/services/snackbar-manager.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
    private readonly snackbarManagerService: SnackbarManagerService,
  ) {
  }

  public onCreateUser(userData: Partial<User>) {
    this.usersService.create(userData).subscribe(() => {
      this.router.navigate(['./users']);
      this.snackbarManagerService.openSnackBar('User has been created');
    })
  }
}
