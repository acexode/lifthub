import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DispatcherService } from '../dispatcher.service';
import * as M from '../../assets/js/materialize.min.js';

@Component({
  selector: 'app-booking',
  encapsulation: ViewEncapsulation.None,
   templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})

export class BookingComponent implements OnInit {

  space;
  constructor(private dispatcher: DispatcherService, private route: ActivatedRoute) { } 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    this.dispatcher.getSingle(id).subscribe((data: any) =>{
      this.space = data.space;
      console.log(this.space);
    });

  }


}

