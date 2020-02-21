import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

import { DispatcherService } from '../dispatcher.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  disabledSubmitButton = true;
  user = {email: '', password: '', token: ''};
  errMsg: any;
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('formPassword').value !== c.get('formConfirmPassword').value) {
        return {invalid: true};
    }
}
  constructor(private dispatcher: DispatcherService, private router: Router, private route: ActivatedRoute) { }

  validatingForm: FormGroup;
   ngOnInit() {

      this.validatingForm = new FormGroup({
       formEmail: new FormControl('', [Validators.required, Validators.email]),
       formPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
       formConfirmPassword: new FormControl('', [Validators.required] ),
      
     }, {validators: this.passwordConfirming});
   }

   @HostListener('input') oninput() {
    if (this.validatingForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
   get formEmail() {
     return this.validatingForm.get('formEmail');
   }
   get formPassword() {
     return this.validatingForm.get('formPassword');
   }
   get formConfirmPassword() {
     return this.validatingForm.get('formConfirmPassword');
   }

  
  reset(){    
    this.user.email =  this.formEmail.value;
    this.user.password =  this.formPassword.value;
    // this.user.path =  location.origin;
    
    this.route.queryParams.subscribe(params => {
      this.user.token = params.token
     console.log(params)
    });
  console.log(this.user)
    this.dispatcher.resetPassword(this.user).subscribe(res => {     
      this.router.navigate(['space'])
    },err => {
      console.log(err)
      this.errMsg = err.error.message;
    });
  }
}
