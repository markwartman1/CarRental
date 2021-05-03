import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carRental';

  constructor(
    private as: AuthService,
    private route: Router
    ) {

  }

  onLogout() {
    this.route.navigate(['/login']);
    this.as.logout();
  }
}
