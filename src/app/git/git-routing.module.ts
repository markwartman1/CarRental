import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithomeComponent } from './githome/githome.component';


const routes: Routes = [
  { path: '', component: GithomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitRoutingModule { }
