import { SampleData } from './../sample';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { DispatcherService } from '../dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from 'src/environments/environment';

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
    spacePrice  = 1000
    paymentSuccessful = false
    services = 0
    user
    serviceObject = {
      wifi : false,
      projector: false,
      breakfast : false,
      tv : false,
      whiteboard : false

    }
  constructor(private dispatcher: DispatcherService, private route: ActivatedRoute, private flashMessage: FlashMessagesService, private router: Router) { }

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    setTimeout(() => this.success = true, 10000);
    this.dispatcher.getSingle(id).subscribe((data: any) => {
      this.spaceData = data.space;
      this.spacePrice = data.space.details.price
      console.log(data.space);
      console.log(this.spacePrice);
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
    this.dispatcher.getUserData().subscribe((data:any) => {
      console.log(data);
      this.user = data.user
    })

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


  bookSpace = ({ startDate, endDate, spaceId, recurringData, price }) => {
    const existingBookings = this.spaceData.bookings ;
    console.log(existingBookings);

    // Check if there is a clash and, if not, save the new booking to the database
    try {
      this.dispatcher.bookSpace(
        { startDate, endDate, spaceId, recurringData, price },
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
    console.log('current space');
    console.log(space);

    const x = getpaidSetup({
        PBFPubKey: environment.PBFPubKey,       
        customer_email: this.user.email,
        amount: this.services + this.spacePrice,
       // customer_phone: '',
        currency: 'NGN',        
        txref: 'rave-123456',
        meta: [{
            metaname: 'flightID',
            metavalue: 'AP1234'
        }],
        onclose : (response) => {

            if(this.paymentSuccessful){
              alert('payment successful');
            }else{
              this.dispatcher.deleteBooking(lastBooking.spaceId, lastBooking._id).subscribe(() => {
                alert('booking failed');
              });
            }
        },
        callback : (response) => {
            let txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
            console.log(response);
            if (response.tx.chargeResponseCode === '00' ||  response.tx.chargeResponseCode === '0' ) {
                // redirect to a success page
                console.log(response);
                const details = {
                  amount: response.tx.amount,
                  spaceId:  lastBooking.spaceId,
                  customer: lastBooking.user,
                  name : space.details.name,
                  bookingStart : lastBooking.bookingStart,
                  bookingEnd : lastBooking.bookingEnd,
                  owner : space.owner_id,
                  txref : response.txref
                }
                this.paymentSuccessful = true
                console.log('details');
                console.log(details);
                // alert('payment successful');              
                this.dispatcher.transaction(details).subscribe(data =>{
                  this.onSuccess.emit(space.spaceType);
                  this.router.navigate(['/space/dashboard']);
                })
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
  console.log(event.currentTarget.id);
  if(event.currentTarget.checked){
        this.serviceObject[event.currentTarget.id] = true
        this.services  += parseInt(event.currentTarget.value);
  }else{
    this.serviceObject[event.currentTarget.id] = false
    this.services -= parseInt(event.currentTarget.value);
  }
  
      
  }
  onSubmit() {
    console.log(this.checkInDate);
    console.log(this.services + this.spacePrice)
    console.log(this.serviceObject)
    const startDate = this.checkInDate.toString() + ' ' + this.checkInTime.time + ' ' + this.checkInTime.amOrPm;
    const endDate = this.checkOutDate.toString() + ' ' + this.checkOutTime.time + ' ' + this.checkInTime.amOrPm;
    const recurringType = this.elem('#recurringOption').value;
    const recurringDate = this.recurringDate.toString();
    const recurringData = this.handleRecurringData(recurringType, recurringDate);
    console.log(startDate)
    console.log(endDate)
    if (this.checkInDate.toString() === '' || this.checkInDate.toString() === '') {
       this.errMsg = true;
     } else {
      this.errMsg = false;
      const data = {
        startDate,
        endDate,
        spaceId:  this.spaceData._id,
        price : this.services + this.spacePrice,
        recurringData
      };
      console.log(data);
      this.bookSpace(data);
     }

  }


}


