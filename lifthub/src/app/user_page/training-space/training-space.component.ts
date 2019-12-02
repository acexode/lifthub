import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { CheckAvailabilityComponent } from 'src/app/check-availability/check-availability.component';
import { DispatcherService } from 'src/app/dispatcher.service';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-training-space',
  templateUrl: './training-space.component.html',
  styleUrls: ['./training-space.component.scss']
})
export class TrainingSpaceComponent implements OnInit {

  modalRef: MDBModalRef;
  spaces = SampleData;
constructor(private dispatcher: DispatcherService, private service: MDBModalService, private router: Router) { }

ngOnInit() {
  const path = this.router.url;
  const index = path.lastIndexOf('/') + 1;
  const space = path.substring(index);
  console.log(space)
  this.dispatcher.spaceType(space).subscribe((res:any) => {
        console.log(res);
        // this.spaces = res
      }, error => {
        console.log('Error', error);
      });
}
gotoBook(index){
  this.router.navigate(['space/booking', {data :this.spaces[index] }])
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


