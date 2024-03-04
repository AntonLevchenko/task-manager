import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from "rxjs";
import { Task } from '../../../tasks/interfaces/task.interface';
import { TasksService } from '../../../tasks/services/tasks.service';
import { User } from '../../interfaces/user.interface';
import { SnackbarManagerService } from '../../../shared/snackBar/services/snackbar-manager.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  public users$: Observable<User[]> = this.usersService.data$;

  constructor(
    private readonly usersService: UsersService,
    private readonly tasksService: TasksService,
    private readonly snackbarManagerService: SnackbarManagerService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  public getAssignedTask(userId: string): Observable<Task[]> {
    return this.tasksService.filterByUser(userId);
  }

  public deleteUser(id: string): void {
    this.usersService.delete(id).pipe(
      switchMap(() => this.tasksService.unAssignAllUserTask(id))
    ).subscribe(() => {
      this.snackbarManagerService.openSnackBar('User has been deleted');
    });
  }

  public editUser(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  public createNewUser() {
    this.router.navigate(['./new'], { relativeTo: this.route });
  }

  public trackById(index: number, item: User) {
    return item.id
  }
}
