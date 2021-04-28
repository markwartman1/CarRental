import { Injectable, EventEmitter } from '@angular/core';
import { Users } from "../Models/Users";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public selectedUser: BehaviorSubject<number> = new BehaviorSubject<number>(-99);
  selectedUserObject = new BehaviorSubject<Users>(null);
  users : Users[]; 

  // DOES NOT SEEM TO BE NEEDED
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private ms: MessageService
  ) { }

  private usersUrl: string = 'api/users';

  private log(message: string) {
    this.ms.add("User Service: " + message);
  }

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

  updateUser(user: Users): Observable<any> {
    // to purposely throw error, use below
    //user.id = null;

    /**
     * Interesting, if success, the object in console statement
     * is null, the dom access correct object though??
     * 
     * But, if error, consoled obj is stringified properly.
     */
    return this.http.put(`${this.usersUrl}`, user, this.httpOptions)
    .pipe(
      tap(x => this.log("Updated: " + user.id)),
      catchError(x => {throw "here is my thrown err: " + JSON.stringify(x)})
      );
  }
}
