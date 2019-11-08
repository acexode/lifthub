import { ModalComponent } from './../modal/modal.component';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import { Router } from '@angular/router';
import { MDBModalRef,MDBModalService } from 'angular-bootstrap-md';
import { SignupComponent } from '../signup/signup.component';

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
  constructor(private dispatcher : DispatcherService,private router:Router,private service : MDBModalService ) { }

  ngOnInit() {
  }
   goto(e){   
        this.router.navigate(['space/'+e])   
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
