import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../Services/Guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { MessagepromptComponent } from './messageprompt/messageprompt.component';

// { path: '', component: HomeComponent, canActivate:[AuthGuardService] },

// { path: 'message', component: MessageComponent },

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: MessagepromptComponent },
      { path: 'message', component: MessageComponent }
    ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }
