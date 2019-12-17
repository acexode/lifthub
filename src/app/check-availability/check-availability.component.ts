import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBModalRef,MDBModalService } from 'angular-bootstrap-md';
import { DispatcherService } from '../dispatcher.service';
@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.scss']
})
export class CheckAvailabilityComponent implements OnInit {
  disabledSubmitButton = true;

  constructor(private service: MDBModalService, public modalRef: MDBModalRef, private dispatcher: DispatcherService) { }

  validatingForm: FormGroup;
  message = {name: '', email: '', phone: '', msg: ''};
  ngOnInit() {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalPhone: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });
    this.contactFormModalMessage.setValue("Hi i am interested in this property");
  }
  @HostListener('input') oninput() {
    if (this.validatingForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalPhone() {
    return this.validatingForm.get('contactFormModalPhone');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
  sendMessage(){
    this.message.name = this.contactFormModalName.value;
    this.message.email = this.contactFormModalEmail.value;
    this.message.phone = this.contactFormModalPhone.value;
    this.message.msg = this.contactFormModalMessage.value;
    console.log(this.message);
    this.dispatcher.checkAvailability(this.message).subscribe(res => {
      console.log(res);
      alert('message sent !!');
    });
    this.validatingForm.reset();
    this.modalRef.hide();
  }
  closeModal() {
    console.log('clicked');
    this.modalRef.hide();
  }

}

