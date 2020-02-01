import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  
  constructor(private dispatcher: DispatcherService) { }

  ngOnInit() {
    this.dispatcher.check().subscribe((decode:any) =>{
      console.log(decode)
      if(decode.expired){
        localStorage.removeItem('token')
      }else{
        console.log('all good');
      }
    })
  }

}
