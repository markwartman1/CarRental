import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [HomeComponent, MessageComponent],
  imports: [
    CommonModule,
    GarageRoutingModule
  ]
})
export class GarageModule { }
