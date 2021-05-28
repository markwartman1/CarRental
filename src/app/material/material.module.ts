import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {ClipboardModule} from '@angular/cdk/clipboard';

const Material = [
  MatCardModule,
  MatGridListModule,
  ClipboardModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
