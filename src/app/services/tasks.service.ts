import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  addTask(task: Task) {
    this.task$.next([...this.task$.value, task]);
  }

  getAllTasks() {
    return this.task$;
  }
}
