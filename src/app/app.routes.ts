import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './list/list.component';
import { AddTaskComponent } from './add/add.component';
import { EditTaskComponent } from './edit/edit.component';
import { DeleteTaskComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'edit/:id', component: EditTaskComponent },
  { path: 'delete/:id', component: DeleteTaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
