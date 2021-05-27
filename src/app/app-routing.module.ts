import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { CarLotComponent } from './components/car-lot/car-lot.component';
import { RegistrationComponent } from './components/lobby/registration/registration.component';
import { RentalComponent } from './components/lobby/rental/rental.component';
import { Registration2Component } from './components/lobby/registration2/registration2.component';
import { GriderTempletFormComponent } from './components/lobby/grider-templet-form/grider-templet-form.component';
import { UserRosterComponent } from './components/user-roster/user-roster.component';
import { EditUserComponent } from './components/user-roster/edit-user/edit-user.component';
import { UserRoster2Component } from './components/user-roster2/user-roster2.component';
import { EditUser2Component } from './components/user-roster2/edit-user2/edit-user2.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { AuthGuardService } from './Services/Guards/auth-guard.service';
import { AppComponent } from './app.component';
import { LinksComponent } from './components/links/links.component';

// { path: '', component: AppComponent, pathMatch: 'full' },
// { path: '', component: LoginComponent },
// { path: '**', component: LoginComponent },
// { path: 'welcome', component: WelcomeComponent, canActivate:[AuthGuardService] },

const routes: Routes = [
  
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'carLot', component: CarLotComponent },
  { path: 'lobby/registration', component: RegistrationComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'lobby/registration2', component: Registration2Component },
  { path: 'griderTemplateForm', component: GriderTempletFormComponent },
  { path: 'users', component: UserRosterComponent },
  { path: 'users/edit-user', component: EditUserComponent },
  { path: 'users2', component: UserRoster2Component },
  { path: 'users2/edit-user2', component: EditUser2Component },
  { path: 'links', component: LinksComponent },
  { path: 'garage', loadChildren: () => import('./garage/garage.module').then(m => m.GarageModule) },
  { path: 'git', loadChildren: () => import('./git/git.module').then(m => m.GitModule) },
  { path: 'password', loadChildren: () => import('./password/password.module').then(m => m.PasswordModule) },
  { path: 'login', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
