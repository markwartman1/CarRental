import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

const Material = [
  MatCardModule,
  MatGridListModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }