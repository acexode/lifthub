import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DispatcherService } from '../dispatcher.service';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CheckAvailabilityComponent } from '../check-availability/check-availability.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
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
  // tslint:disable-next-line: max-line-length
  constructor(private dispatcher: DispatcherService, private service: MDBModalService, private router: Router, private route: ActivatedRoute, private form: FormsModule) { }

  ngOnInit() {    
    this.route
    .queryParams
    .subscribe(obj => {        
      const {space, location} = obj 
        this.dispatcher.search(space, location).subscribe((res: any) => {         
          this.spaces = res.space;
        }, error => {
          console.log('Error', error);
        });

    }).unsubscribe()

  }

  gotoBook(index) {
    console.log(index);
    if (this.dispatcher.isLoggedIn()) {
      this.router.navigate(['space/booking', { data: index }]);
    } else {
     
      this.modalRef = this.service.show(ModalComponent, this.options);

    }
  }
  openLogin() {
    this.modalRef = this.service.show(LoginComponent, this.options);
  }
  openSignUp() {
    this.modalRef.hide();
    this.modalRef = this.service.show(SignupComponent, this.options);
  }

}
