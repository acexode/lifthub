import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { CheckAvailabilityComponent } from 'src/app/check-availability/check-availability.component';
import { DispatcherService } from 'src/app/dispatcher.service';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bed-space',
  templateUrl: './bed-space.component.html',
  styleUrls: ['./bed-space.component.scss']
})
export class BedSpaceComponent implements OnInit {
  modalRef: MDBModalRef;
  spaces = SampleData;
  constructor(private dispatcher: DispatcherService, private service: MDBModalService, private route: ActivatedRoute) { }

  ngOnInit() {
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
