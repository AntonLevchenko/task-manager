import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError, Observable, of, throwError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(
    private readonly tasksService: UsersService,
    private readonly router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    if (!userId) {
      this.redirectToErrorPage();
      return throwError(() => 'id was not provided');
    }

    return this.tasksService.getById(userId).pipe(
      catchError((err) => {
        this.redirectToErrorPage();
        return throwError(err);
      })
    );
  }

  private redirectToErrorPage() {
    this.router.navigate(['./error']);
  }
}
