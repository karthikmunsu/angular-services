import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SharedServiceService } from './shared/shared-service.service';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'first',
    component: FirstChildComponent,
    data: {
      title: 'First Component'
    }
  },
  {
    path: 'second',
    component: SecondChildComponent,
    data: {
      title: 'Second Child'
    }
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SharedServiceService] 
})
export class AppRoutingModule { }
