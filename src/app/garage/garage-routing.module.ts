import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../Services/Guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  { path: 'garage', component: HomeComponent, canActivate:[AuthGuardService] },
  { path: 'message', component: MessageComponent, canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }
