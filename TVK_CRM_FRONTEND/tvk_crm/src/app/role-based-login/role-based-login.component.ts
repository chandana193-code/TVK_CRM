import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-role-based-login',
  templateUrl: './role-based-login.component.html',
  styleUrls: ['./role-based-login.component.css']
})
export class RoleBasedLoginComponent {

constructor(

private fb:FormBuilder,

private router:Router

){}

loginForm=this.fb.group({

email:['',[Validators.required,Validators.email]],

password:['',Validators.required]

});

login(){

const email=this.loginForm.value.email;

const password=this.loginForm.value.password;

if(

email==="hr@tvktechs.com"

&&

password==="hr@123"

){

localStorage.setItem("role","ADMIN");

alert("Welcome Admin");

this.router.navigate(['/admin']);

return;

}

if(

email==="lead@tvktechss.com"

&&

password==="Lead@123"

){

localStorage.setItem("role","LEAD");

alert("Welcome Team Lead");

this.router.navigate(['/lead-dashboard']);

return;

}

alert("Invalid Email or Password");

}

}
