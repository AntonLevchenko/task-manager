import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading-data-container',
  standalone: true,
  imports: [CommonModule, MatProgressBar],
  templateUrl: './loading-data-container.component.html',
  styleUrl: './loading-data-container.component.scss'
})
export class LoadingDataContainerComponent {
  @Input() data$: Observable<unknown[]>;
}
