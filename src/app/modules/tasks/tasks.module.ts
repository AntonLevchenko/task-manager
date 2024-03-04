import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { MatButton } from '@angular/material/button';
import { MatToolbarRow } from '@angular/material/toolbar';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { AssignedUserComponent } from './components/assigned-user/assigned-user.component';
import { UsersModule } from '../users/users.module';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInput } from '@angular/material/input';
import { TasksService } from './services/tasks.service';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { TaskResolver } from './resolvers/task.resolver';
import { MatProgressBar } from '@angular/material/progress-bar';
import { NoTasksFoundComponent } from './components/no-tasks-found/no-tasks-found.component';



@NgModule({
  declarations: [
    TasksListComponent,
    TaskCardComponent,
    EditTaskComponent,
    TaskFormComponent,
    CreateTaskComponent,
    AssignedUserComponent,
    TaskStatusComponent,
    NoTasksFoundComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatButton,
    MatToolbarRow,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatLabel,
    MatSelect,
    MatOption,
    MatHint,
    MatFormField,
    MatCardActions,
    SharedModule,
    ReactiveFormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatInput,
    UsersModule,
    MatProgressBar
  ],
  providers: [
    TasksService,
    TaskResolver
  ]
})
export class TasksModule { }
