import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task;
  @Output() onSubmit: EventEmitter<Partial<Task>> = new EventEmitter();

  taskForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    if (this.task) {
      this.taskForm.setValue({
        name: this.task.name,
        description: this.task.description
      });
    }
  }

  onSubmitForm() {
    if (this.taskForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.taskForm.value as Task);
  }
}
