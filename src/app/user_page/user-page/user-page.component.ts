import { Component, OnInit, Inject } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';

declare const payWithRave: any
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  
  constructor(private dispatcher: DispatcherService) { }

  ngOnInit() {
    console.log('decode');
   
    this.dispatcher.check().subscribe((data:any) =>{
      console.log('decode')
      console.log(data.expired)
      if(data.expired){
        console.log('all good');       
      }else{
        localStorage.removeItem('token')
        console.log('removed token');
      }
    })
  }

}
