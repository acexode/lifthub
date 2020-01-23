import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/dispatcher.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users
  spaces
  bookings
  constructor(private dispatcher: DispatcherService) { }

  ngOnInit() {
    this.dispatcher.users().subscribe((res:any) => {
      console.log(res)
      this.users = res.users
    })
    this.dispatcher.Bookings().subscribe((res:any) => {        
      this.spaces = res.bookings
      const arr = this.spaces.map(book =>  book.bookings )
      this.bookings = arr.flat(Infinity)     
      
    })
  }
  public getUser(id){   
    var user = this.users.filter(s => s._id == id)
    return user[0].email
  }
  public getSpace(id){      
    var space = this.spaces.filter(s => s._id == id)   
     return space[0].details.name
  }

}
