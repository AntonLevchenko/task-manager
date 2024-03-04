import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../interfaces/user.interface';
import { map, Observable, take } from 'rxjs';
import { BaseDataManagerService } from '../../shared/services/base-data-manager.service';
import { MOCK_USERS_DATA } from '../../../mocks/users.mock';

@Injectable({providedIn: 'root'})
export class UsersService extends BaseDataManagerService<User> {
  constructor() {
    super();
    this.dataSubject$.next(MOCK_USERS_DATA)
  }

  override create(data: Partial<User>): Observable<number> {
    const newData: User = {
      id: uuidv4(),
      tasks: [],
      ...data
    } as User;

    return this.data$.pipe(
      map((item: User[]) => item.push(newData)),
      take(1)
    );
  }
}
