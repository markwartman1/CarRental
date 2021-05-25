import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { MessagepromptComponent } from './messageprompt/messageprompt.component';


@NgModule({
  declarations: [HomeComponent, MessageComponent, MessagepromptComponent],
  imports: [
    CommonModule,
    GarageRoutingModule
  ],
  exports: []
})
export class GarageModule { }
