import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {email:"",password:""};
  errMsg;
  data:any 
  
  @ViewChild ('login',{static:true}) public loginModal: any;
  @ViewChild ('signup',{static:true}) public signupModal: any;
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
  openLogin() {
    this.loginModal.show();
  }
  openSignUp() {
    this.loginModal.hide()
    this.signupModal.show();
  }
  hideLogin(){
    this.loginModal.hide()
  }
  hidesignup(){
    this.loginModal.hide()
  }
 

}
