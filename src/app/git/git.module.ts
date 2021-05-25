import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { GitRoutingModule } from './git-routing.module';
import { GithomeComponent } from './githome/githome.component';
import { GitcardComponent } from './githome/gitcard/gitcard.component';


@NgModule({
  declarations: [GithomeComponent, GitcardComponent],
  imports: [
    CommonModule,
    GitRoutingModule,
    MaterialModule
  ]
})
export class GitModule { }
