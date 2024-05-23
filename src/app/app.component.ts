import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskListComponent } from './list/list.component';
import { AddTaskComponent } from './add/add.component';
import { EditTaskComponent } from './edit/edit.component';
import { DeleteTaskComponent } from './delete/delete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    TaskListComponent,
    AddTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo-app';
}
