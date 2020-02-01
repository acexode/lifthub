import { DispatcherService } from './dispatcher.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  modalRef: MDBModalRef; 
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
  constructor(private router: Router,private dispatcher: DispatcherService, private service: MDBModalService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.dispatcher.isLoggedIn()){
        return true;

      }else{
        this.modalRef = this.service.show(ModalComponent, this.options);
        return false
      }
  }
  
}
