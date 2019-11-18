import { ModalComponent } from './../modal/modal.component';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import { Router } from '@angular/router';
import { MDBModalRef,MDBModalService } from 'angular-bootstrap-md';
import { SignupComponent } from '../signup/signup.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {  
  data:any 
  modalRef: MDBModalRef;
  options =  {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: ' modal-top',
    containerClass: 'center',
    animated: true
  }
  subscribeForm: FormGroup;
  disabledSubmitButton: boolean = true;
  
  constructor(private dispatcher : DispatcherService,private router:Router,private service : MDBModalService,private fb: FormBuilder ) { 
    this.subscribeForm = fb.group({
      'subscribeFormName': ['', Validators.required],
      'subscribeFormEmail': ['', Validators.compose([Validators.required, Validators.email])]
      });
  }

  ngOnInit() {
  }
   goto(e){   
        this.router.navigate(['space/' + e]);
  }
  @HostListener('input') oninput() {
    if (this.subscribeForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
  onSubmit() {
    console.log(this.subscribeForm.value);
    this.dispatcher.subscribe(this.subscribeForm.value).subscribe((res) => {
      alert('Your message has been sent.');
      console.log(res)
      this.subscribeForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  // goto(e){
  //   console.log(this.dispatcher.isLoggedIn())
  //   //if(this.dispatcher.isLoggedIn()){
  //       this.router.navigate(['space/'+e])
  //   }else{
     
  //     this.modalRef = this.service.show(ModalComponent,this.options);
   
  //   }
  // }
  // openLogin() {    
  //   this.modalRef = this.service.show(LoginComponent,this.options)
  // }
  // openSignUp() {    
  //   this.modalRef.hide()
  //   this.modalRef = this.service.show(SignupComponent,this.options)
  // }
  

}
