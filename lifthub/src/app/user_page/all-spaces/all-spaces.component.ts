import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DispatcherService } from '../../dispatcher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-spaces',
  templateUrl: './all-spaces.component.html',
  styleUrls: ['./all-spaces.component.scss']
})
export class AllSpacesComponent implements OnInit {

  // sample raw data
  spaces = [{
    name: 'Meeting Spaces',
    link: 'office',
    sub: [{
      name: 'Personal Meeting',
      img: 'https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'Team Meeting',
      img: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'Business Meeting',
      img: 'https://images.pexels.com/photos/1181431/pexels-photo-1181431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }]
  },
  {
    name: 'Events & Training Spaces',
    link: 'event',
    sub: [{
      name: 'Seminar',
      img: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg??auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'Meetup',
      img: 'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'Trainings',
      img: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }]
  },
  {
    name: 'Conference Spaces',
    link: 'conference',
    sub: [{
      name: 'Business Conference',
      img: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'Social',
      img: 'https://images.pexels.com/photos/1181626/pexels-photo-1181626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'Political Gathering',
      img: 'https://images.pexels.com/photos/4666/berlin-eu-european-union-federal-chancellery.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }]
  },
  {
    name: 'Other Spaces',
    link: 'bedspace',
    sub: [{
      name: 'Birthdays',
      img: 'https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'Weddings',
      img: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }, {
      name: 'End of year parties',
      img: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }]
  }];
  searchForm: FormGroup;
  search;
  disabledSubmitButton: boolean = true;
  constructor(private fb: FormBuilder, private dispatcher: DispatcherService, private router: Router) { 
    this.searchForm = fb.group({
      'space': ['', Validators.required],
      'location': ['', Validators.required],
      });
  }

  ngOnInit() {
    console.log("entered");
    if (navigator.geolocation) {
      console.log(true);
      navigator.geolocation.watchPosition(position =>{
        console.log(position.coords.latitude);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.dispatcher.getLocationData(lat, lng).subscribe((res: any) => {
          this.searchForm.setValue({
            'space' : '',
            'location': res.fullLocation.split(',')[0]
          })
          console.log(res);
        })
      });
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }
  showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position.coords.longitude);
    this.dispatcher.getLocationData(lat, lng).subscribe(res => {
     console.log(res);
   });
  }
  @HostListener('input') oninput() {
    if (this.searchForm.valid) {
      this.disabledSubmitButton = false;
    }
  }
  onSubmit() {
    const {space, location} = this.searchForm.value;
    const url = `space/search`;
    console.log(space + ' ' + location);
    this.router.navigate([url], {queryParams: {space, location}});
  }

}
