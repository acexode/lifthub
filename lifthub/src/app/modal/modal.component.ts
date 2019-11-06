import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  constructor(public modalRef: MDBModalRef,private service:MDBModalService) {}

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
openSignUp() {    
  this.modalRef.hide()
  this.modalRef = this.service.show(SignupComponent)
}

}
