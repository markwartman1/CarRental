import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitRoutingModule } from './git-routing.module';
import { GithomeComponent } from './githome/githome.component';


@NgModule({
  declarations: [GithomeComponent],
  imports: [
    CommonModule,
    GitRoutingModule
  ]
})
export class GitModule { }
