import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
      formData = {
    email: '',
    password: ''
  };

  constructor(private userService: Users, private router: Router) {}

  onSubmit(form:any) {
    this.userService.loginUser(this.formData).subscribe({
      next: (res) => {
        alert('Login successful');
        localStorage.setItem('token', res.token); // Save JWT token
        form.resetForm();
        // this.router.navigate(['/dashboard']); // navigate after login
      },
      error: (err) => {
        alert('Login failed');
        console.error(err);
      }
    });
  }
}
