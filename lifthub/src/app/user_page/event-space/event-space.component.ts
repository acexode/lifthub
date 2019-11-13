import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { CheckAvailabilityComponent } from 'src/app/check-availability/check-availability.component';
import { DispatcherService } from 'src/app/dispatcher.service';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-space',
  templateUrl: './event-space.component.html',
  styleUrls: ['./event-space.component.scss']
})
export class EventSpaceComponent implements OnInit {

  modalRef: MDBModalRef;
  spaces = SampleData;
  slides: any = [[]];
constructor(private dispatcher: DispatcherService, private service: MDBModalService, private route: ActivatedRoute) { }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

ngOnInit() {
  this.slides = this.chunk(this.spaces, 3);
  this.route.queryParams.subscribe(params => {
    const {space, location} = params;
    console.log(params);
    this.dispatcher.spaceType(space).subscribe((res:any) => {
        console.log(res);
        // this.spaces = res
      }, error => {
        console.log('Error', error);
      });

    });
}
  CheckAvailability(){
    this.modalRef = this.service.show(CheckAvailabilityComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: ' modal-top',
      containerClass: 'center',
      animated: true
  });
  }

}


