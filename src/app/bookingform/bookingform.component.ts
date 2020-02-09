import { SampleData } from './../sample';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { DispatcherService } from '../dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';

declare const M: any;
declare const getpaidSetup: any;

@Component({
  selector: 'app-bookingform',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  spaceData = SampleData[0];
  success = false;
  disabledSubmitButton = true;
  options = {
    minDate: new Date()
  };
    checkInDate;
    checkInTime;
    checkOutDate;
    checkOutTime;
    recurringDate;
    recurringOption;
    errMsg = false;
    spacePrice 
    services = 0
    serviceObject = {
      wifi : false,
      projector: false,
      breakfast : false,
      tv : false,
      whiteboard : false

    }
  constructor(private dispatcher: DispatcherService, private route: ActivatedRoute, private flashMessage: FlashMessagesService) { }

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    setTimeout(() => this.success = true, 10000);
    this.dispatcher.getSingle(id).subscribe((data: any) => {
      this.spaceData = data.space;
      console.log(this.spaceData);
      console.log(this.minDate());
      // init form
      this.checkInDate = M.Datepicker.init(this.elem('#checkInDate'), {minDate: this.minDate(), format: 'yyyy-mm-dd'});
      this.checkOutDate = M.Datepicker.init(this.elem('#checkOutDate'), {minDate: this.minDate(), format: 'yyyy-mm-dd'});
      this.recurringDate = M.Datepicker.init(this.elem('#recurringDate'), {minDate: this.minDate(), format: 'yyyy-mm-dd'});
      this.checkInTime = M.Timepicker.init(this.elem('#checkInTime'), {});
      this.checkOutTime = M.Timepicker.init( this.elem('#checkOutTime'), {});
      M.Datepicker.getInstance(this.elem('#checkIntDate'), {minDate: this.minDate()}).setDate(this.minDate());
      M.Datepicker.getInstance(this.elem('#checkOutDate'), {minDate: this.minDate()}).gotoDate(this.minDate());

    });

    // M.DatePicker.getInstance(this.elem('#checkOutDate')).gotoDate(this.minDate());
    // M.DatePicker.getInstance(this.elem('#recurringDate')).gotoDate(this.minDate());
    // M.Datepicker.getInstance(this.elem('#checkOutDate')).setDate(new Date("2020,12,19"));
    // M.Datepicker.getInstance(this.elem('#checkInDate')).gotoDate(new Date("2020,12,17"));
    console.log(this.checkInDate);
    //console.log(M.DatePicker.getInstance(this.elem('#checkInDate')))
  }

  // return id of elements 
  elem(elm) {
    return document.querySelector(elm);
  }

  // return last item in booking array of space
  minDate() {
    if (this.spaceData.bookings.length === 0) {
      return new Date();
    } else {
      // set date to last bookingEnd
      const lastItem = this.spaceData.bookings[this.spaceData.bookings.length - 1].bookingEnd;
      console.log(lastItem);     
      return new Date(lastItem);
    }
  }


  bookSpace = ({ startDate, endDate, spaceId, recurringData }) => {
    const existingBookings = this.spaceData.bookings ;
    console.log(existingBookings);

    // Check if there is a clash and, if not, save the new booking to the database
    try {
      this.dispatcher.bookSpace(
        { startDate, endDate, spaceId, recurringData },
        existingBookings
      ).then((space: any) => {
           // If the new booking is successfully saved to the database
           if (space) {
             this.payWithRave(space);
              // console.log(payWithRave());

           }
      });

    } catch (err) {
      // If there is a booking clash and the booking could not be saved
      alert(
        `Your booking could not be saved. Please ensure it does not clash with an existing booking
         and that it is a valid time in the future.`
      );
      console.log(err.response.data.error.message.match(/error:.+/i)[0]);
    }
  }

  handleEndDate(dateArray) {
    const recurringEndDate = [];
    dateArray.forEach(item => {
      recurringEndDate.push(parseInt(item));
    });
    return recurringEndDate;
  }
  // Format the recurring data into an array
  handleRecurringData(type, date) {
    let recurringData = [];
    if (type !== 'none' && type !== null) {
      recurringData = [ date, type];
      // recurringData[0][1] = recurringData[0][1] - 1
    } else {
        recurringData = [];
    }
    return recurringData;
  }
  payWithRave(space) {
    console.log('initialize payment');
    let lastBooking = space.bookings[space.bookings.length - 1];
    console.log(lastBooking);
    const x = getpaidSetup({
        PBFPubKey: 'FLWPUBK-73f9f2047d8df29124adc6d43aa6134a-X',
        // PBFPubKey: 'FLWPUBK-e2f49a592820916c1f1c939c171b645a-X',
        customer_email: 'abudawud92@gmail.com',
        amount: 2000,
        customer_phone: '2347056855607',
        currency: 'NGN',
        txref: 'rave-123456',
        meta: [{
            metaname: 'flightID',
            metavalue: 'AP1234'
        }],
        onclose : () => {

            this.dispatcher.deleteBooking(lastBooking.spaceId, lastBooking._id).subscribe(() => {
              alert('booking failed');
            });
        },
        callback : (response) => {
            let txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
            console.log('This is the response returned after a charge', response);
            if (
                response.tx.chargeResponseCode === '00' ||
                response.tx.chargeResponseCode === '0'
            ) {
                // redirect to a success page
                alert('payment successful');
                this.onSuccess.emit(space.spaceType);
            } else {
                // redirect to a failure page.
                this.dispatcher.deleteBooking(lastBooking.spaceId, lastBooking._id).subscribe(() => {
                  alert('booking failed');
                });
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}
  FieldsChange(event:any){
  console.log(event.element);
  if(event.element.checked){
        this.serviceObject[event.element.id] = true
        this.services  += parseInt(event.element.value);
  }else{
    this.serviceObject[event.element.id] = false
    this.services -= parseInt(event.element.value);
  }
  
      
    }
  onSubmit() {
    console.log(this.checkInDate);
    console.log(this.services)
    console.log(this.serviceObject)
    const startDate = this.checkInDate.toString() + ' ' + this.checkInTime.time + ' ' + this.checkInTime.amOrPm;
    const endDate = this.checkOutDate.toString() + ' ' + this.checkOutTime.time + ' ' + this.checkInTime.amOrPm;
    const recurringType = this.elem('#recurringOption').value;
    const recurringDate = this.recurringDate.toString();
    const recurringData = this.handleRecurringData(recurringType, recurringDate);
    if (this.checkInDate.toString() === '' || this.checkInDate.toString() === '') {
       this.errMsg = true;
     } else {
      this.errMsg = false;
      const data = {
        startDate,
        endDate,
        spaceId:  this.spaceData._id,
        recurringData
      };
      console.log(data);
      this.bookSpace(data);
     }

  }


}


