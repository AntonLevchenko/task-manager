import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { SnackbarManagerService } from '../../../shared/snackBar/services/snackbar-manager.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  public user: Observable<User>  = this.route.data.pipe(
    map((data: Data) => data['user'])
  );

  constructor(
    private readonly usersService: UsersService,
    private readonly snackbarManagerService: SnackbarManagerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  onEditUser(userId: string, userData: Partial<User>) {
    this.usersService.update(userId, userData).subscribe(() => {
      this.router.navigate(['./users']);
      this.snackbarManagerService.openSnackBar('User has been updated');
    })
  }

}
