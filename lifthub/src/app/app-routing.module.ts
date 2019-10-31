<<<<<<< HEAD
=======
import { SpacesComponent } from './spaces/spaces.component';
>>>>>>> changed username to email in login and signup
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


<<<<<<< HEAD
const routes: Routes = [];
=======
const routes: Routes = [
  {
    path: "",
    redirectTo:"/",
    pathMatch:"full"
  },
  {
    path: "space",
    component:SpacesComponent,
    data:{title:"Spaces"}
  }
];
>>>>>>> changed username to email in login and signup

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
