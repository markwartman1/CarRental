import { Injectable, EventEmitter } from '@angular/core';
import { Users } from "../Models/Users";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public selectedUser: BehaviorSubject<number> = new BehaviorSubject<number>(-99);
  selectedUserObject = new BehaviorSubject<Users>(null);
  users : Users[]; 

  constructor(
    private http: HttpClient
  ) { }

  private usersUrl: string = 'api/users';

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl);
  }

  selectUser(userId: number) {
    this.selectedUser.next(userId);
  }

  getSelectUser(): Observable<number> {     // Not using this at the moment
    return this.selectedUser.asObservable();
  }

  getUser(userId : number): Observable<Users> {
    // return this.selectedUser.asObservable();
    return this.http.get<Users>(`${this.usersUrl}/${userId}`);
  }

  // selectedUserObject
  setSelectedUserObject(user: Users) {
    this.selectedUserObject.next(user);
  }
}
