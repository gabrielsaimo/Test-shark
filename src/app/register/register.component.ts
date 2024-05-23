import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService
      .register(this.username, this.password)
      .subscribe((success) => {
        if (success) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Registro falhou';
        }
      });
  }
}
