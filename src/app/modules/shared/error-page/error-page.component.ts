import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-error-page',
  standalone: true,
  templateUrl: './error-page.component.html',
  imports: [
    MatProgressBar,
    ContainerComponent
  ],
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {

}
