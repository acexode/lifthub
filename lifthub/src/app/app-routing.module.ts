
import { BedSpaceComponent } from './user_page/bed-space/bed-space.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user_page/user-page/user-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllSpacesComponent } from './user_page/all-spaces/all-spaces.component';
import { OfficeSpaceComponent } from './user_page/office-space/office-space.component';


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
      path: "bedspace",
      component: BedSpaceComponent
      },
      {
        path: "workspace",
        component: OfficeSpaceComponent
      }
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
