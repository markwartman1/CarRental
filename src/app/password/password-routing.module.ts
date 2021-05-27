import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasshomeComponent } from './passhome/passhome.component';


const routes: Routes = [
  { path: "", component: PasshomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
