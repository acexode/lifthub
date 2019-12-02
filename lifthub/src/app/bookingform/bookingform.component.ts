import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DispatcherService } from '../dispatcher.service';
import * as M from '../../assets/js/materialize.min.js';

@Component({
  selector: 'app-bookingform',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {

  disabledSubmitButton = true;
  options = {
    minDate: new Date()
  };
    checkInDate;
    checkInTime;
    checkOutDate;
    checkOutTime;
  constructor(private dispatcher: DispatcherService,private fb: FormBuilder, private route: ActivatedRoute) { }
  BookForm: FormGroup;
  message = {name: '', email: '', phone: '', msg: ''};
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('data'));
    const checkin = document.querySelector('#checkInDate');
    const checkout = document.querySelector('#checkOutDate');
    const timein = document.querySelectorAll('#checkInTime');
    const timeout = document.querySelectorAll('#checkOutTime');
    this.checkInDate = M.Datepicker.init(checkin, {minDate: new Date,format:"yyyy-mm-dd"});
    this.checkOutDate = M.Datepicker.init(checkout, {minDate: new Date,format:"yyyy-mm-dd"});
    this.checkInTime = M.Timepicker.init(timein, {});
    this.checkOutTime = M.Timepicker.init(timeout, {});
    this.BookForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkInTime: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      checkOutTime: ['', Validators.required],
    });

  }

  @HostListener('input') oninput() {
    if (this.BookForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
  onSubmit() {
    console.log(this.checkInDate)
    console.log(this.checkInDate.date);
    console.log(this.checkInTime[0].time);
    console.log('-------------------');
    console.log(this.checkOutDate.date);
    console.log(this.checkOutTime[0].time);
    if(new Date(this.checkInDate.date) > new Date(this.checkOutDate.date)){
      console.log("checkin greater than checkout")
    }else{
      console.log("checkout greater than checkin");
    }
    // this.dispatcher.subscribe(this.subscribeForm.value).subscribe((res) => {
    //   alert('Your message has been sent.');
    //   console.log(res)
    //   this.subscribeForm.reset();
    //   this.disabledSubmitButton = true;
    // }, error => {
    //   console.log('Error', error);
    // });
  }

}


