import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import { SampleData } from '../sample';
import { BookingformComponent } from '../bookingform/bookingform.component';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-booking',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})

export class BookingComponent implements OnInit {

  space = SampleData[0];
  success;
  @ViewChild(BookingformComponent,{static:false}) bookingForm;
  constructor(private dispatcher: DispatcherService, private route: ActivatedRoute,private flashMessage: FlashMessagesService) { } 
  ngOnInit() {
    this.success = this.bookingForm.success
    const id = this.route.snapshot.paramMap.get('data');
    this.dispatcher.getSingle(id).subscribe((data: any) =>{
      this.space = data.space;
      console.log(this.space);
    });
    

  }
  successMsg(space: any):void {
    this.flashMessage.show(`${space} successfully booked.`, { cssClass: 'alert-success', timeout: 20000 });
          
    console.log('Picked date: ', space);
}


}

