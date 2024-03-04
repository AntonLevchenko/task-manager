import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { SnackbarTypes } from '../enum/snackbar-types.enum';

@Injectable()
export class SnackbarManagerService {
  private static durationInSeconds = 5

  constructor(
    private snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, type: SnackbarTypes = SnackbarTypes.success) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: [type],
      duration: SnackbarManagerService.durationInSeconds * 1000
    });
  }

}
