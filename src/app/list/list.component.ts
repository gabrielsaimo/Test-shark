import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Observable, of } from 'rxjs';
import { Task } from '../task.model';
import { catchError } from 'rxjs/operators';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [NzDividerModule, NzTableModule, CommonModule],
  styleUrls: ['./list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> | null = null;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks().pipe(
      catchError((error: any, caught: Observable<Task[]>) => {
        console.error('Error fetching tasks:', error);
        return caught;
      })
    );
  }

  editTask(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteTask(id: number): void {
    this.router.navigate(['/delete', id]);
  }

  addTask(): void {
    this.router.navigate(['/add']);
  }
}
