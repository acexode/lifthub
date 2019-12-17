import { SampleData } from './../sample';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DispatcherService } from '../dispatcher.service';
import * as M from '../../assets/js/materialize.min.js';
@Component({
  selector: 'app-bookingform',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {

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


  constructor(private dispatcher: DispatcherService, private route: ActivatedRoute) { }

   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    setTimeout(()=> this.success = true,10000)
    this.dispatcher.getSingle(id).subscribe((data: any) => {
      this.spaceData = data.space;
      console.log(this.spaceData);
      console.log(this.minDate())
      // init form
      this.checkInDate = M.Datepicker.init(this.elem('#checkInDate'), {minDate: this.minDate(), format: 'yyyy-mm-dd'});
      this.checkOutDate = M.Datepicker.init(this.elem('#checkOutDate'), {minDate: this.minDate(), format: 'yyyy-mm-dd'});
      this.recurringDate = M.Datepicker.init(this.elem('#recurringDate'), {minDate: this.minDate(), format: 'yyyy-mm-dd'});
      this.checkInTime = M.Timepicker.init(this.elem('#checkInTime'), {});
      this.checkOutTime = M.Timepicker.init( this.elem('#checkOutTime'), {});
      M.Datepicker.getInstance(this.elem('#checkIntDate'),{minDate: this.minDate()}).setDate(this.minDate());
      M.Datepicker.getInstance(this.elem('#checkOutDate'),{minDate: this.minDate()}).gotoDate(this.minDate());

    })

    // M.DatePicker.getInstance(this.elem('#checkOutDate')).gotoDate(this.minDate());
    // M.DatePicker.getInstance(this.elem('#recurringDate')).gotoDate(this.minDate());
    // M.Datepicker.getInstance(this.elem('#checkOutDate')).setDate(new Date("2020,12,19"));
    // M.Datepicker.getInstance(this.elem('#checkInDate')).gotoDate(new Date("2020,12,17"));
    console.log(this.checkInDate)
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
      console.log(lastItem)     
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
      ).then((space:any) => {
           // If the new booking is successfully saved to the database
           console.log(space)
           alert(`${space.spaceType} successfully booked.`);
      });

    } catch (err) {
      // If there is a booking clash and the booking could not be saved
      this.success = true;
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
  onSubmit() {
    console.log(this.checkInDate);
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


