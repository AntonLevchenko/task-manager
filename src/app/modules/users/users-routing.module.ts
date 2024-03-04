import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserResolver } from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'new',
    component: CreateUserComponent
  },
  {
    path: ':id',
    component: EditUserComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
