import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  spaces = [{
    name: "Meeting Spaces",
    sub: [{
      name: "Personal Meeting",
      img: "https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "Team Meeting",
      img: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "Business Meeting",
      img: "https://images.pexels.com/photos/1181431/pexels-photo-1181431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }]
  },
  {
    name: "Events & Training Spaces",
    sub: [{
      name: "Seminar",
      img: "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg??auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "Meetup",
      img: "https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "Trainings",
      img: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }]
  },
  {
    name: "Conference Spaces",
    sub: [{
      name: "Business Conference",
      img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "Social",
      img: "https://images.pexels.com/photos/1181626/pexels-photo-1181626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "Political Gathering",
      img: "https://images.pexels.com/photos/4666/berlin-eu-european-union-federal-chancellery.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }]
  },
  {
    name: "Other Spaces",
    sub: [{
      name: "Birthdays",
      img: "https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "Weddings",
      img: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
      name: "End of year parties",
      img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }]
  }];
  constructor() { }

  ngOnInit() {
  }

}
