import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces';
import { TasksService } from '../services/tasks.service';

@Component({
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private readonly taskService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks()
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks;
          console.log(this.tasks);
        },
        error: (err) => { throw new Error(err); }
      });
  }
}
