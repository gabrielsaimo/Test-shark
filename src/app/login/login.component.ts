import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService
      .login(this.username, this.password)
      .subscribe((success) => {
        if (success) {
          this.router.navigate(['/add']);
        } else {
          this.errorMessage = 'Login falhou';
        }
      });
  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
