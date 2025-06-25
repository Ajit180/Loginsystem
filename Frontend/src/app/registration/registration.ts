import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Users } from '../services/users';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
  formData = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    mobile_no: '',
    username: '',
    address: ''
  };

  constructor(private userService: Users, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill all required fields correctly');
      return;
    }

    if (this.formData.password !== this.formData.confirm_password) {
      alert('Passwords do not match!');
      return;
    }

    this.userService.registerUser(this.formData).subscribe({
      next: (res) => {
        alert('User Registered Successfully');
        console.log(res);
        form.resetForm(); // ✅ clear form
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Registration Failed');
        console.log(err);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  showPassword = false; 

   togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
