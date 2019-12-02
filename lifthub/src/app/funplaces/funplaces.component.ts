import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SampleData } from './../sample';
@Component({
  selector: 'app-funplaces',
  templateUrl: './funplaces.component.html',
  styleUrls: ['./funplaces.component.scss']
})
export class FunplacesComponent implements OnInit {
  spaces = SampleData;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoBook(index){
    this.router.navigate(['space/booking', {data :this.spaces[index] }])
}


}
