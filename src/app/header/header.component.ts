import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  tasksLength: number = 0;

  constructor(private readonly taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getAllTasks()
      .subscribe({
        next: (tasks) => {
          this.tasksLength = tasks.length;
        },
        error: (err) => { throw new Error(err); }
      });
  }

}
