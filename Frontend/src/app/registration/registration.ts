import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Users } from '../services/users';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone:true,
  imports: [FormsModule,RouterModule],
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

  constructor (private userService:Users,private router: Router){}

  onSubmit(form:any){
    this.userService.registerUser(this.formData).subscribe({
      next:(res)=>{
        alert("User Registred Successfully");
        console.log(res);
        form.resetForm();
        this.router.navigate(['/login']);
      },
      error:(err)=>{
        alert("User Failed");
        console.log(err);
      }
    })
  }

   goToLogin() {
       this.router.navigate(['/login']);
   }
}
