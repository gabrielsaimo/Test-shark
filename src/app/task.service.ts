import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor() {}

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  addTask(task: Task): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = [...currentTasks, task];
    this.tasksSubject.next(updatedTasks);
  }

  updateTask(id: number, updatedTask: Task): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    this.tasksSubject.next(updatedTasks);
  }

  deleteTask(id: number): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.filter((task) => task.id !== id);
    this.tasksSubject.next(updatedTasks);
  }
}
