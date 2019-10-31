import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed-space',
  templateUrl: './bed-space.component.html',
  styleUrls: ['./bed-space.component.scss']
})
export class BedSpaceComponent implements OnInit {

  constructor() { }
    bedspaces = [
    {
        type: "Bed Space"
    },
    {
      title: "Smart bedspace"
    },
    {
      image: ""
    },
    {
      location: "Central Business District, Abuja"
    },
    {
      description: "Beautifully furnished bed space with smart room gadgets"
    },
    {
      price: "1,200,000",
      
    },
    {
    availability: true
     
    }
    ]
  ngOnInit() {
  }

}
