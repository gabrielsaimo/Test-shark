import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditTaskComponent implements OnInit {
  task: Task = { id: 0, title: '', description: '' };
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTasks().subscribe((tasks) => {
      this.task = tasks.find((task) => task.id === this.id) || {
        id: 0,
        title: '',
        description: '',
      };
    });
  }

  editTask(): void {
    this.taskService.updateTask(this.id, this.task);
    this.router.navigate(['/tasks']);
  }
}
