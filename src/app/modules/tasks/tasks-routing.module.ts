import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskResolver } from './resolvers/task.resolver';

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent
  },
  {
    path: 'new',
    component: CreateTaskComponent
  },
  {
    path: ':id',
    component: EditTaskComponent,
    resolve: {
      task: TaskResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
