import { Component } from '@angular/core';
import { Task } from '../interfaces';
import { TasksService } from '../services/tasks.service';

@Component({
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class FormComponent {

  task: Task = {
    id: crypto.randomUUID(),
    title: '',
    description: ''
  };

  constructor(private readonly taskService: TasksService) { }

  submit() {
    this.taskService.addTask(this.task);
    setTimeout(() => this.resetFormValues(), 100);
  }

  resetFormValues() {
    this.task = {
      id: crypto.randomUUID(),
      title: '',
      description: ''
    };
  }

  disableButton() {
    return this.task.title.length < 3 || this.task.description.length < 3;
  }
}
