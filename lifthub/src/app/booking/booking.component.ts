import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';
import { SampleData } from '../sample';

@Component({
  selector: 'app-booking',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})

export class BookingComponent implements OnInit {

  space = SampleData[0];
  constructor(private dispatcher: DispatcherService, private route: ActivatedRoute) { } 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    this.dispatcher.getSingle(id).subscribe((data: any) =>{
      this.space = data.space;
      console.log(this.space);
    });

  }


}

