import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  imports: [FormsModule, CommonModule],
})
export class AddTaskComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
    };
    this.taskService.addTask(newTask);
    localStorage.setItem('tasks', JSON.stringify(newTask));
    this.router.navigate(['/tasks']);
  }
}
