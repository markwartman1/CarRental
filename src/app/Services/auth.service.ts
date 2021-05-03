import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedin = new BehaviorSubject<boolean>(false);
  isLoggedin = this.loggedin.asObservable();
  
  constructor() { }
  
  login(username: string, password: string): Observable<boolean> {
    
    if (username === 'Secret' && password === '1') {
      this.loggedin.next(true);
      return of(true);
    } else {
      return of(false);
    }
  }

  logout() {
    this.loggedin.next(false);
  }

  getAuth(): Observable<boolean> {
    return this.loggedin.asObservable();
  }

}
