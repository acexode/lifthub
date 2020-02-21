import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import {Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  validatingForm: FormGroup;
  disabledSubmitButton = true;
  user = {username: '', password: ''};
  data;
  errMsg;
  constructor(private router: Router, public modalRef: MDBModalRef, private dispatch: DispatcherService, private service: MDBModalService) {}

  ngOnInit() {

    this.validatingForm = new FormGroup({
      modalFormElegantUsername: new FormControl('', Validators.required),
      modalFormElegantPassword: new FormControl('', Validators.required)
    });
  }

  @HostListener('input') oninput() {
   if (this.validatingForm.valid) {
     this.disabledSubmitButton = false;
   }
 }
  get modalFormElegantUsername() {
    return this.validatingForm.get('modalFormElegantUsername');
  }

  get modalFormElegantPassword() {
    return this.validatingForm.get('modalFormElegantPassword');
  }

  login(){
    
    this.user.username =  this.modalFormElegantUsername.value;
    this.user.password =  this.modalFormElegantPassword.value;
    this.dispatch.login(this.user).subscribe(res => {
      console.log(res)
      this.data = res['token']
      localStorage.setItem('token', this.data);      
      let timeout = 1000 * 60 * 60  * 6
      setTimeout(()=>{
        localStorage.removeItem('token')
      },timeout)
      this.modalRef.hide()
      this.router.navigate(['space'])
    },err => {
      console.log(err)
      this.errMsg = err.error.message;
    });
  }
  forgot(){
    this.router.navigate(['forgot-password'])
  }
 openSignUp() {

   this.modalRef.hide();
   this.modalRef = this.service.show(SignupComponent)
 }
 googleLogin(){
    
  }


}
