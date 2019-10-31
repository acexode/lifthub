import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-space',
  templateUrl: './bed-space.component.html',
  styleUrls: ['./bed-space.component.scss']
})
export class BedSpaceComponent implements OnInit {
  spaces = [{  
    spaceType: "Bed Space",
    details : {
      name: "Single bed space",
      img: "https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      location: "Central Business District, Abuja",
      description: "Beautifully furnished bed space with smart room gadgets",
      price: "1,200,000",
      availability: true

  
    },    
  
  }]
  constructor() { }
    
  ngOnInit() {
  }

}
