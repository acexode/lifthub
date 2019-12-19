import { Component, OnInit, HostListener,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',  
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {


  }
  goto(e){   
    console.log(e)
    this.router.navigate(['space/' + e]);
}

}
