import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { GarageModule } from "./garage/garage.module";

import { InMemoryDataService } from './Services/in-memory-data.service';

import { AppComponent } from './app.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { RegistrationComponent } from './components/lobby/registration/registration.component';
import { CarLotComponent } from './components/car-lot/car-lot.component';
import { RentalComponent } from './components/lobby/rental/rental.component';
import { Registration2Component } from './components/lobby/registration2/registration2.component';
import { GriderTempletFormComponent } from './components/lobby/grider-templet-form/grider-templet-form.component';
import { UserRosterComponent } from './components/user-roster/user-roster.component';
import { EditUserComponent } from './components/user-roster/edit-user/edit-user.component';
import { UserRoster2Component } from './components/user-roster2/user-roster2.component';
import { EditUser2Component } from './components/user-roster2/edit-user2/edit-user2.component';
import { MessageIterateComponent } from './components/message-iterate/message-iterate.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LinksComponent } from './components/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    RegistrationComponent,
    CarLotComponent,
    RentalComponent,
    Registration2Component,
    GriderTempletFormComponent,
    UserRosterComponent,
    EditUserComponent,
    UserRoster2Component,
    EditUser2Component,
    MessageIterateComponent,
    LoginComponent,
    WelcomeComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    FormsModule,
    GarageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
