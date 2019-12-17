import { BookingComponent } from './booking/booking.component';
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

import { FunplacesComponent } from './user_page/funplaces/funplaces.component';
// import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/space',
    pathMatch: 'full'
  },
  {
    path: 'space',
    component: UserPageComponent,
    children : [
      {
        path: 'booking',
        component: BookingComponent
      },
      {
        path: '',
        component: AllSpacesComponent,
        pathMatch: 'full'
      },
      {
        path: 'funplaces',
        children : [
          {
            path: 'restaurant',
            component: FunplacesComponent
          },
          {
            path: 'pub',
            component: FunplacesComponent
          },
          {
            path: 'bar',
            component: FunplacesComponent
          },
          {
            path: 'coffee',
            component: FunplacesComponent
          },
          {
            path: 'movies',
            component: FunplacesComponent
          },
          {
            path: 'concert',
            component: FunplacesComponent
          },
          {
            path: 'boat ride',
            component: FunplacesComponent
          },
          {
            path: 'library',
            component: FunplacesComponent
          },
          {
            path: 'receptions',
            component: FunplacesComponent
          },
          {
            path: 'club',
            component: FunplacesComponent
          },
          {
            path: 'table',
            component: FunplacesComponent
          },
          {
            path: 'meetups',
            component: FunplacesComponent
          },
          {
            path: 'bonfire',
            component: FunplacesComponent
          },
          {
            path: 'barbecue',
            component: FunplacesComponent
          },
          {
            path: 'stargazing',
            component: FunplacesComponent
          },
        ]
      },
      {
        path: 'office',
        children : [
          {
            path: 'private',
            component: OfficeSpaceComponent
          },
          {
            path: 'shared',
            component: OfficeSpaceComponent
          },
          {
            path: 'co-working',
            component: OfficeSpaceComponent
          },
          {
            path: 'open',
            component: OfficeSpaceComponent
          },
        ]
        // component: OfficeSpaceComponent
      },
      {
        path: 'search',
        component: SearchResultComponent
      },
      {
        path: 'bedspace',
        children: [
          {
            path: 'single bed',
            component: BedSpaceComponent
          },
          {
            path: 'double bed',
            component: BedSpaceComponent
          },
          {
            path: 'executive bedroom',
            component: BedSpaceComponent
          },
          {
            path: 'executive suite',
            component: BedSpaceComponent
          },
          {
            path: 'luxury suite',
            component: BedSpaceComponent
          },
          {
            path: 'apartment',
            component: BedSpaceComponent
          },
        ]
      },
      {
        path: 'events',
        children : [
          {
            path: 'picnics',
            component: EventSpaceComponent
          },
          {
            path: 'meeting',
            component: EventSpaceComponent
          },
          {
            path: 'trainings',
            component: EventSpaceComponent
          },
          {
            path: 'private meeting',
            component: EventSpaceComponent
          },
          {
            path: 'board meeting',
            component: EventSpaceComponent
          },
          {
            path: 'group meeting',
            component: EventSpaceComponent
          },
          {
            path: 'reception',
            component: EventSpaceComponent
          },
          {
            path: 'conference',
            component: EventSpaceComponent
          },
          {
            path: 'seminars',
            component: EventSpaceComponent
          },
          {
            path: 'meetups',
            component: EventSpaceComponent
          },
          {
            path: 'lectures',
            component: EventSpaceComponent
          },
        ]
      }

  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
