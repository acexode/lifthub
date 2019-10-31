import { DispatcherService } from './../dispatcher.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {email:"",password:""};
  errMsg;
  constructor( private router:Router, private dispatch: DispatcherService) {
     
   }
   validatingForm: FormGroup;

   ngOnInit() {
     
     this.validatingForm = new FormGroup({
       modalFormElegantEmail: new FormControl('', Validators.email),
       modalFormElegantPassword: new FormControl('', Validators.required)
     });
   }
 
   get modalFormElegantEmail() {
     return this.validatingForm.get('modalFormElegantEmail');
   }
 
   get modalFormElegantPassword() {
     return this.validatingForm.get('modalFormElegantPassword');
   }

  signup(){
    this.user.email =  this.modalFormElegantEmail.value
    this.user.password =  this.modalFormElegantPassword.value

    console.log(this.user.email + "your password is "+ this.user.password)

    this.dispatch.signup(this.user).subscribe(data =>{
      console.log(data)
     
    },err=>{
      this.errMsg = err.error.message
    })
  }

}
