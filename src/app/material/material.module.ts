import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

const Material = [
  MatCardModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
