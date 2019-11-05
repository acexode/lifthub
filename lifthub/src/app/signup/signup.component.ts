import { DispatcherService } from './../dispatcher.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild ('login',{static:true}) public loginModal: any;
  @ViewChild ('signup',{static:true}) public signupModal: any;
  data:any 
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
  login(){   
    this.user.email =  this.modalFormElegantEmail.value
    this.user.password =  this.modalFormElegantPassword.value   
    console.log(this.user)
    this.dispatch.login(this.user).subscribe(res =>{
      console.log(res)
      this.data = res['token']
      localStorage.setItem('token',this.data)
      this.router.navigate(['space'])
    },err=>{
      this.errMsg = err.error.message
    })
  }
  openLogin() {
    this.signupModal.hide()
    this.loginModal.show();
  }
  openSignUp() {    
    this.signupModal.show();
  }
  hideLogin(){
    this.loginModal.hide()
  }
  hidesignup(){
    this.signupModal.hide()
  }

}
