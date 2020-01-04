import { Component, OnInit } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookings
  spaces
  user
  booked = false;
  headElements = ['No', 'Space', 'Date', 'Expires','Extend Booking','Cancel'];
  constructor(private dispatcher: DispatcherService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.dispatcher.getUserData().subscribe((data : any) =>{
      this.spaces = data.space
      this.user = data.user
      this.booked = true
      
    })
  }
  deleteBooking(spaceId,bookingId){   

    this.dispatcher.deleteBooking(spaceId, bookingId).subscribe(()=>{
      window.location.reload();
      this.flashMessage.show(`booking successfully deleted.`, { cssClass: 'alert-success', timeout: 20000 });
      
    })
    
  }
  extendBooking(spaceId,bookingId){   

    this.dispatcher.extendBooking(spaceId, bookingId).subscribe(()=>{
      window.location.reload();
      this.flashMessage.show(`Extension Request Sent.`, { cssClass: 'alert-success', timeout: 20000 });      
    })
    
  }

}
