import { LoginComponent } from './../login/login.component';
import { DispatcherService } from './../dispatcher.service';
import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {email: '', username:'', password: ''};
  errMsg;
  successMsg;
  data:any;
  disabledSubmitButton: boolean = true;
  constructor( private router: Router, private dispatch: DispatcherService,public modalRef: MDBModalRef, private service: MDBModalService) {
   }
   validatingForm: FormGroup;

   ngOnInit() {

     this.validatingForm = new FormGroup({
       modalFormElegantEmail: new FormControl('', Validators.email),
       modalFormElegantUsername: new FormControl('', Validators.required),
       modalFormElegantPassword: new FormControl('', Validators.required)
     });
   }
   @HostListener('input') oninput() {
    if (this.validatingForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

   get modalFormElegantEmail() {
     return this.validatingForm.get('modalFormElegantEmail');
   }
   get modalFormElegantUsername() {
     return this.validatingForm.get('modalFormElegantUsername');
   }

   get modalFormElegantPassword() {
     return this.validatingForm.get('modalFormElegantPassword');
   }

  signup(){
   
    this.user.email =  this.modalFormElegantEmail.value;
    this.user.username =  this.modalFormElegantUsername.value;
    this.user.password =  this.modalFormElegantPassword.value;
    this.dispatch.signup(this.user).subscribe(res =>{
      console.log(res)
      this.successMsg = res['message'];
      this.dispatch.login(this.user).subscribe(token =>{
        this.data = token['token']
        localStorage.setItem('token', this.data);
        let date = new Date()
        localStorage.setItem('date', date.toDateString())
        this.modalRef.hide()
        this.router.navigate(['space']);
      });
    }, err => {
      this.errMsg = err.error.message;
      console.log(err);
    });
  }

  openLogin() {
    this.modalRef.hide();
    this.service.show(LoginComponent);
  }

}
