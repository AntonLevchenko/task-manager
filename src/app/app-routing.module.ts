import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ErrorPageComponent } from './modules/shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    loadChildren: () => TasksModule
  },
  {
    path: 'users',
    loadChildren: () => UsersModule
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
