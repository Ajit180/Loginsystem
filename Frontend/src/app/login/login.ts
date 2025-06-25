import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../services/users';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterModule,CommonModule],
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
        // alert('Login successful');
        localStorage.setItem('token', res.token);
        console.log('Token',res.token);
        form.resetForm();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert('Login failed you have entered wrong crendtials');
        console.error(err);
      }
    });
  }

  goToRegister() {
       this.router.navigate(['/regi']);
   }

}
