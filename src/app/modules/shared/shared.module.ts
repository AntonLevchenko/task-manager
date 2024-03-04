import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from './forms/forms.module';
import { ContainerComponent } from './container/container.component';
import { HeaderModule } from './header/header.module';
import { SnackbarManagerService } from './snackBar/services/snackbar-manager.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoadingDataContainerComponent } from './loading-data-container/loading-data-container.component';
import { SnackbarModule } from './snackBar/snackbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    SnackbarModule,
    ContainerComponent,
    LoadingDataContainerComponent,
    ErrorPageComponent
  ],
  exports: [
    FormsModule,
    HeaderModule,
    ContainerComponent,
    LoadingDataContainerComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
