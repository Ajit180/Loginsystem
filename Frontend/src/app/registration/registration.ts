import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Users } from '../services/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone:true,
  imports: [CommonModule,FormsModule],
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

  constructor (private userService:Users){}

  onSubmit(form:any){
    this.userService.registerUser(this.formData).subscribe({
      next:(res)=>{
        alert("User Registred Successfully");
        console.log(res);
        form.resetForm();
      },
      error:(err)=>{
        alert("User Failed");
        console.log(err);
      }
    })
  }
}
