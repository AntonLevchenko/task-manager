import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbar,
    MatButton,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
