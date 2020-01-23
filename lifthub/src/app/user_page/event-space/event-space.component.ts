import { SampleData } from './../../sample';
import { Component, OnInit } from '@angular/core';
import { CheckAvailabilityComponent } from 'src/app/check-availability/check-availability.component';
import { DispatcherService } from 'src/app/dispatcher.service';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/modal/modal.component';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-event-space',
  templateUrl: './event-space.component.html',
  styleUrls: ['./event-space.component.scss']
})
export class EventSpaceComponent implements OnInit {
  spaceCapcity = [
    { cap: 'All', name: 'capacity' },
    { cap: '1-5', name: 'capacity' },
    { cap: '11-30', name: 'capacity' },
    { cap: '31-50', name: 'capacity' },
    { cap: '51-100', name: 'capacity' },
    { cap: '101-250', name: 'capacity' },
    { cap: '251-500', name: 'capacity' },
    { cap: '500-750', name: 'capacity' },
    { cap:' 750-1000', name: 'capacity' }
  ];
  modalRef: MDBModalRef;
  spaces;
  unfiltered;
  options = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-top',
    containerClass: 'center',
    animated: true
  };
constructor(private dispatcher: DispatcherService, private service: MDBModalService, private router: Router, public fb: FormBuilder) { }

capacityFilter = this.fb.group({
  capacity: ['All']
});

ngOnInit() {
    
    const path = this.router.url;
    const index = path.lastIndexOf('/') + 1;
    const space = path.substring(index);
    this.dispatcher.spaceType(space).subscribe((res: any) => {      
      this.spaces = res.space;
      this.unfiltered = res.space;
      
    }, error => {
      console.log('Error', error);
    });

    this.capacityFilter.valueChanges.subscribe(val =>{     
  
    let arr = this.unfiltered.filter(filter =>{ 
      if (val.capacity == 'All'){        
        return this.unfiltered         
      }else {      
       return filter.details.capacity == val.capacity
      }  
  });
    this.spaces = arr;
})
}

gotoBook(index) {
  console.log(index);
  if (this.dispatcher.isLoggedIn()) {
    this.router.navigate(['space/booking', { data: index }]);
  } else {
    this.modalRef = this.service.show(ModalComponent, this.options);

  }
}
openLogin() {
  this.modalRef = this.service.show(LoginComponent, this.options);
}
openSignUp() {
  this.modalRef.hide();
  this.modalRef = this.service.show(SignupComponent, this.options);
}

}


