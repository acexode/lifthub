import { ModalComponent } from './../modal/modal.component';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import { Router } from '@angular/router';
import { MDBModalRef,MDBModalService } from 'angular-bootstrap-md';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();
  year;
  Company = ["Our Missions","Careers","Newsroom"] 
  qLink = ["Take a tour","Opportunities","Community"] 
  gInfo = ["Blog","Forum","Businesses"] 
  modalRef: MDBModalRef;
  constructor(private dispatcher: DispatcherService, private router: Router, private service: MDBModalService ) { }

  ngOnInit() {
    this.year = this.date.getFullYear()
  }
  goto(e){
    console.log(this.dispatcher.isLoggedIn())
    if (this.dispatcher.isLoggedIn()) {
        this.router.navigate(['space/'+e])
    } else {
      this.modalRef = this.service.show(ModalComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: ' modal-top',
        containerClass: 'center',
        animated: true
    });

    }
  }
  openLogin() {
    this.modalRef = this.service.show(LoginComponent)
  }
  openSignup() {
    this.modalRef = this.service.show(SignupComponent)
  }

}
