import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private as: AuthService
    ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.as.getAuth();
    
  }
}
