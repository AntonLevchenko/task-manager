import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';
import { SnackbarManagerService } from './services/snackbar-manager.service';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatButton,
    MatSnackBarAction,
    MatIcon
  ],
  providers: [
    SnackbarManagerService
  ]
})
export class SnackbarModule { }
