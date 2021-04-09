import { Injectable, EventEmitter } from '@angular/core';
import { Users } from "../Models/Users";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // selectedUser = new Subject<Users>();
  selectedUser: Subject<number> = new Subject<number>();
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

  getSelectUser(): Observable<number> {
    return this.selectedUser.asObservable();
  }

  getUser(userId : number): Observable<Users> {
    // return this.selectedUser.asObservable();
    return this.http.get<Users>(`${this.usersUrl}/${userId}`);
  }
}
