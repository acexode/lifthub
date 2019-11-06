import { LoginComponent } from './../login/login.component';
import { DispatcherService } from './../dispatcher.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {email:"",password:""};
  errMsg;
  data:any 
  constructor( private router:Router, private dispatch: DispatcherService,public modalRef: MDBModalRef,private service:MDBModalService) {
     
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
 
  openLogin() {
    this.modalRef.hide()
    this.service.show(LoginComponent);
    
  }
  

}
