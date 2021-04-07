import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from "../../Models/Users";
import { UserService } from "../../Services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-roster',
  templateUrl: './user-roster.component.html',
  styleUrls: ['./user-roster.component.css']
})
export class UserRosterComponent implements OnInit, OnDestroy {

  sub: Subscription;
  users: Users[];

  constructor( 
    private us : UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.sub = this.us.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onClickEditBio(id: number) {
    console.log("id: " + id);
    this.router.navigate(['users/edit-user']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
