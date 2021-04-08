import { Injectable, EventEmitter } from '@angular/core';
import { Users } from "../Models/Users";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // selectedUser = new Subject<Users>();
  selectedUser = new Subject<number>();

  constructor(
    private http: HttpClient
  ) { }

  private usersUrl: string = 'api/users';

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }

  setUser(userId : number) {
    //console.log("user in service is: " + user.id);
    //console.log("name in service is: " + user.name);
    this.selectedUser.next(userId);
    //console.log("in service: this.selectedUser--> " + this.selectedUser);
  }

  getUser() {
    // return this.selectedUser.asObservable();
    return this.selectedUser;
  }
}
