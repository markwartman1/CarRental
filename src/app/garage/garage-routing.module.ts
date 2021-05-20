import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../Services/Guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';

// { path: '', component: HomeComponent, canActivate:[AuthGuardService] },

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'message', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }
