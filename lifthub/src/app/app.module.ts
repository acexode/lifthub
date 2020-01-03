import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { SectionsComponent } from './sections/sections.component';
import { FooterComponent } from './footer/footer.component';
import { UserNavComponent } from './user_page/user-nav/user-nav.component';
import { BedSpaceComponent } from './user_page/bed-space/bed-space.component';
import { OfficeSpaceComponent } from './user_page/office-space/office-space.component';
import { TrainingSpaceComponent } from './user_page/training-space/training-space.component';
import { EventSpaceComponent } from './user_page/event-space/event-space.component';
import { ConferenceSpaceComponent } from './user_page/conference-space/conference-space.component';
import { UserPageComponent } from './user_page/user-page/user-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllSpacesComponent } from './user_page/all-spaces/all-spaces.component';
import { ModalComponent } from './modal/modal.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { BookingComponent } from './booking/booking.component';

import { FunplacesComponent } from './user_page/funplaces/funplaces.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    SectionsComponent,
    FooterComponent,
    UserNavComponent,
    BedSpaceComponent,
    OfficeSpaceComponent,
    TrainingSpaceComponent,
    EventSpaceComponent,
    ConferenceSpaceComponent,
    UserPageComponent,
    LandingPageComponent,
    AllSpacesComponent,
    ModalComponent,
    SearchResultComponent,
    CheckAvailabilityComponent,
    BookingComponent,
   
    FunplacesComponent,
    BookingformComponent,
    DashboardComponent,
    
  ],  
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [LoginComponent,ModalComponent,SignupComponent,CheckAvailabilityComponent],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
