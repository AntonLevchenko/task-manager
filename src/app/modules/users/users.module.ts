import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatCard, MatCardActions, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MatToolbarRow } from '@angular/material/toolbar';
import { FormsModule } from '../shared/forms/forms.module';
import { MatList, MatListItem, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { UserResolver } from './resolvers/users.resolver';
import { MatProgressBar } from '@angular/material/progress-bar';
import { NoUsersFoundComponent } from './components/no-users-found/no-users-found.component';
import { LoadingDataContainerComponent } from '../shared/loading-data-container/loading-data-container.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    UsersListComponent,
    UserCardComponent,
    EditUserComponent,
    UserFormComponent,
    CreateUserComponent,
    NoUsersFoundComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatCardTitle,
    MatButton,
    MatLabel,
    MatError,
    MatFormField,
    MatInput,
    MatToolbarRow,
    FormsModule,
    MatList,
    MatListSubheaderCssMatStyler,
    MatListItem,
    MatIcon,
    MatProgressBar,
    LoadingDataContainerComponent
  ],
  providers: [
    UsersService,
    UserResolver
  ]
})
export class UsersModule { }
