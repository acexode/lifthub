import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DispatcherService } from '../dispatcher.service';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CheckAvailabilityComponent } from '../check-availability/check-availability.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  modalRef: MDBModalRef;
  spaces = [
    {
    spaceType: "Bed Space",
    details : {
      name: "Single bed space",
      img: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      location: "Central Business District, Abuja",
      description: "Beautifully furnished bed space with smart room gadgets",
      price: "1,000,000",
      availability: true
    },    
  
  },
  {  
    spaceType: "Bed Space",
    details : {
      name: "Cottage",
      img: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      location: "IBB Way, Abuja",
      description: "Beautifully furnished office with electronic gadgets",
      price: "1,500,000",
      availability: true
    },    
  
  },
  {  
    spaceType: "Bed Space",
    details : {
      name: "Double bed space",
      img: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      location: "Central Business District, Abuja",
      description: "Beautifully furnished double bed space with smart room gadgets",
      price: "1,200,000",
      availability: true
    },    
  
  },
];
  constructor(private route: ActivatedRoute, private dispatcher: DispatcherService, private service: MDBModalService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const {space, location} = params;
      console.log(params);
      this.dispatcher.search(space, location).subscribe((res) => {
          console.log(res);
        }, error => {
          console.log('Error', error);
        });

      });
  }
  CheckAvailability(){
    console.log("clicked")
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
