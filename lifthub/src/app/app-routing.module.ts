
import { BedSpaceComponent } from './user_page/bed-space/bed-space.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user_page/user-page/user-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


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
    children : [{
      path: "bedspace",
      component: BedSpaceComponent
    }],
    data:{title:"Spaces"}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
