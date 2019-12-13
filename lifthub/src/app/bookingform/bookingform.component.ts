import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostListener, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
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

  spaceData;
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
   BookForm: FormGroup;

  constructor(private dispatcher: DispatcherService, private fb: FormBuilder, private route: ActivatedRoute) { }


   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    this.dispatcher.getSingle(id).subscribe((data: any) => {
      this.spaceData = data.space;
      console.log(this.spaceData);
    });

    // init form
    this.checkInDate = M.Datepicker.init(this.elem('#checkInDate'), {minDate: new Date(), format: 'yyyy-mm-dd'});
    this.checkOutDate = M.Datepicker.init(this.elem('#checkOutDate'), {minDate: new Date(), format: 'yyyy-mm-dd'});
    this.recurringDate = M.Datepicker.init(this.elem('#recurringDate'), {minDate: new Date(), format: 'yyyy-mm-dd'});
    this.checkInTime = M.Timepicker.init(this.elem('#checkInTime'), {});
    this.checkOutTime = M.Timepicker.init( this.elem('#checkOutTime'), {});
    this.BookForm = new FormGroup({
      checkInDate: new FormControl(),
      checkInTime:  new FormControl(),
      checkOutDate: new FormControl(),
      checkOutTime:  new FormControl(),
      recurringDate:  new FormControl(),
      recurringOption:  new FormControl(),
    });

  }

  elem(elm) {
    return document.querySelector(elm);
  }


  bookRoom = ({ startDate, endDate, spaceId, recurringData }) => {
    const bookingData = { startDate, endDate, spaceId };
    const existingBookings = this.spaceData.bookings ;
    console.log(existingBookings);

    // Check if there is a clash and, if not, save the new booking to the database
    try {
      this.dispatcher.bookRoom(
        { startDate, endDate, spaceId, recurringData },
        existingBookings
      ).then((space:any) => {
           // If the new booking is successfully saved to the database
           console.log(space)
           alert(`${space.spaceType} successfully booked.`);
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
  onSubmit() {
     const startDate = this.checkInDate.toString() + ' ' + this.checkInTime.time + ' ' + this.checkInTime.amOrPm;
     const endDate = this.checkOutDate.toString() + ' ' + this.checkOutTime.time + ' ' + this.checkInTime.amOrPm;
     const recurringType = this.BookForm.get('recurringOption').value;
     const recurringDate = this.recurringDate.toString();
     const recurringData = this.handleRecurringData(recurringType, recurringDate);
     console.log(recurringType)
     console.log(recurringDate)
     console.log(recurringData)
     const data = {
      startDate,
      endDate,
      spaceId:  this.spaceData._id,
      recurringData
    };
     this.bookRoom(data);
     console.log(data);

  }

}


