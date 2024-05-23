import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteTaskComponent implements OnInit {
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.id);
    this.router.navigate(['/tasks']);  }

  cancel(): void {
    this.router.navigate(['/tasks']);  }
}
