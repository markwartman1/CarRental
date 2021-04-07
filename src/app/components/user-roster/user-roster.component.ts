import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from "../../Models/Users";
import { UserService } from "../../Services/user.service";

@Component({
  selector: 'app-user-roster',
  templateUrl: './user-roster.component.html',
  styleUrls: ['./user-roster.component.css']
})
export class UserRosterComponent implements OnInit, OnDestroy {

  sub: Subscription;
  users: Users[];

  constructor( private us : UserService) { }

  ngOnInit(): void {

    this.sub = this.us.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
