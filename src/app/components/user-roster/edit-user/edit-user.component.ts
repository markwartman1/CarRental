import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/Models/Users';
import { UserService } from "../../../Services/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  sub : Subscription;
  user : Users;
  // name : string;
  id : number;

  constructor(
    private us : UserService
  ) { 
    
  }

  ngOnInit(): void {

    this.getProperty();
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  getProperty() {
    this.sub = this.us.getUser().subscribe(user => {
      // this.name = user.name;
      // this.id = user.id;
      console.log(user);
      this.id = user;
      console.log(this.id);
      // this.user = user;
      // console.log("in edit: " + user.name);
      // console.log("in edit: " + user.id);
      // console.log("in edit on this.name: " + this.user.name);
      // console.log("in edit on this.id: " + this.user.id);
    });
  }

}
