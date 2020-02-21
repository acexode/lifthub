import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DispatcherService } from '../dispatcher.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  disabledSubmitButton = true;
  user = {email : '', path : ''};
  data: any; 
  errMsg


  constructor(private dispatcher : DispatcherService, private router: Router, private route: ActivatedRoute, ) { 
    
  }

  validatingForm: FormGroup;
   ngOnInit() {
  
      this.validatingForm = new FormGroup({
       formEmail: new FormControl('', [Validators.required, Validators.email]),
      
     });
   }

   @HostListener('input') oninput() {
    if (this.validatingForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
   get formEmail() {
     return this.validatingForm.get('formEmail');
   }

  
  reset(){    
    this.user.email =  this.formEmail.value;
    this.user.path =  location.origin;
    console.log(this.user)
    console.log(this.router.url)
    this.dispatcher.forgot(this.user).subscribe(res => {     
      this.router.navigate(['space'])
    },err => {
      console.log(err)
      this.errMsg = err.error.message;
    });
  }

}
