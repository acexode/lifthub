import { Component, OnInit,HostListener } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {email:'',password:''};
  errMsg;
  data;
  disabledSubmitButton = true;
  // tslint:disable-next-line: max-line-length
  constructor( private router: Router, private dispatch: DispatcherService, public modalRef: MDBModalRef, private service: MDBModalService) {
   }
   validatingForm: FormGroup;
   ngOnInit() {

      this.validatingForm = new FormGroup({
       modalFormElegantEmail: new FormControl('', Validators.email),
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

   get modalFormElegantPassword() {
     return this.validatingForm.get('modalFormElegantPassword');
   }

  login(){
    this.user.email =  this.modalFormElegantEmail.value;
    this.user.password =  this.modalFormElegantPassword.value;
    this.dispatch.login(this.user).subscribe(res => {
      console.log(res)
      this.data = res['token']
      localStorage.setItem('token', this.data);
      this.modalRef.hide()
      this.router.navigate(['space'])
    },err => {
      console.log(err)
      this.errMsg = err.error.message;
    });
  }

  openSignUp() {
    this.modalRef.hide();
    this.modalRef = this.service.show(SignupComponent)
  }


}
