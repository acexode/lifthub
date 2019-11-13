
import { BedSpaceComponent } from './user_page/bed-space/bed-space.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user_page/user-page/user-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllSpacesComponent } from './user_page/all-spaces/all-spaces.component';
import { OfficeSpaceComponent } from './user_page/office-space/office-space.component';
import { ConferenceSpaceComponent } from './user_page/conference-space/conference-space.component';
import { TrainingSpaceComponent } from './user_page/training-space/training-space.component';
import { EventSpaceComponent } from './user_page/event-space/event-space.component';
import { SearchResultComponent } from './search-result/search-result.component';
//import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo:"/",
    pathMatch:"full"
  },
  {
    path: "",
    component:LandingPageComponent,
    pathMatch:"full"
  },  
  {
    path: "space",
    component:UserPageComponent,
   
    children : [
      {
        path: "",
        component: AllSpacesComponent,
        pathMatch:"full"
      },      
      {
        path: "conference",
        component: ConferenceSpaceComponent
      },
      {
        path: "training",
        component: TrainingSpaceComponent
      },
      {
        path: "office",
        component: OfficeSpaceComponent
      },      
      {
        path: "search",
        component: SearchResultComponent
      },      
      {
        path: "bedspace",
        component: BedSpaceComponent
      },
      {
        path: "event",
        component: EventSpaceComponent
      }
     
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
