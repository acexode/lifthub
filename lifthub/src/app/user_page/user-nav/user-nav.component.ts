import { Component, OnInit, HostListener,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DispatcherService } from 'src/app/dispatcher.service';
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-user-nav',  
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserNavComponent implements OnInit {
  modalRef: MDBModalRef;
  spaces;
  model;
  options = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-top',
    containerClass: 'center',
    animated: true
  };
  constructor(private router: Router,private dispatcher: DispatcherService,  private service: MDBModalService) { }

  ngOnInit() {


  }
  goto(e){   
    console.log(e)
    this.router.navigate(['space/' + e]);
    

  }
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('date')
    this.router.navigate(['space']);
  }
  dashboard(e) {  
  if (this.dispatcher.isLoggedIn()) {
    this.router.navigate(['space/' + e]);
  } else {
   
    this.modalRef = this.service.show(ModalComponent, this.options);

  }
}

}
