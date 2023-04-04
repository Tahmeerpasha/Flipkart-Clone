import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
       constructor(private fb:FormBuilder){}
       registrationForm=this.fb.group({
        username : [''],
        password : [''],
        mobile : [''],
        gender : [''],
      })
      submitForm(username:any,password:any,mobile:any,gender:any){
          alert(`Username is : ${username.value}`+ `password is : ${password.value}`+ `mobile is :  ${mobile.value}`+ `gender is : ${gender.value}`)
      }
}
