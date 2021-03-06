import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
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
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { AdminFooterComponent } from './admin/footer/footer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateSpaceComponent } from './admin/create-space/create-space.component';
import { HomeComponent } from './admin/home/home.component';






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
    AdminComponent,
    NavigationComponent,
    AdminDashboardComponent,    
    CreateSpaceComponent, HomeComponent,
    AdminFooterComponent

    
  ],  
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    CommonModule
  
    
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [LoginComponent, ModalComponent, SignupComponent, CheckAvailabilityComponent],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
