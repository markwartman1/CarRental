import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasshomeComponent } from './passhome/passhome.component';


@NgModule({
  declarations: [PasshomeComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule
  ]
})
export class PasswordModule { }
