import { Component, OnInit } from '@angular/core';
import { Users } from "../../Models/Users";
import { UserService } from "../../Services/user.service";

@Component({
  selector: 'app-user-roster',
  templateUrl: './user-roster.component.html',
  styleUrls: ['./user-roster.component.css']
})
export class UserRosterComponent implements OnInit {

  users: Users[];

  constructor( private us : UserService) { }

  ngOnInit(): void {

    this.us.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
