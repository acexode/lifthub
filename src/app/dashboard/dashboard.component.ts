import { Component, OnInit } from '@angular/core';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dispatcher: DispatcherService) { }

  ngOnInit() {
    this.dispatcher.getUserData().subscribe(data =>{
      console.log(data)
    })
  }

}
