import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { CarLotComponent } from './components/car-lot/car-lot.component';
import { RegistrationComponent } from './components/lobby/registration/registration.component';
import { RentalComponent } from './components/lobby/rental/rental.component';
import { Registration2Component } from './components/lobby/registration2/registration2.component';
import { GriderTempletFormComponent } from './components/lobby/grider-templet-form/grider-templet-form.component';


const routes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: 'carLot', component: CarLotComponent },
  { path: 'lobby/registration', component: RegistrationComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'registration2', component: Registration2Component },
  { path: 'griderTemplateForm', component: GriderTempletFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
