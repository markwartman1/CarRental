import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/Models/Users';
import { UserService } from "src/app/Services/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  sub: Subscription;
  user: Users;
  // name : string;
  id: number = 0;
  myString: string = 'beautiful default string';

  constructor(private us: UserService) { }

  ngOnInit(): void {

    this.getUser();
    
    
  }


  getUser() {
    // this.myString = 'is now modified';
    
    //this.us.selectedUser.subscribe(data => this.id = data);
    
    this.us.selectedUser.subscribe(num => {
      console.log("this is num: " + num);
      this.id = num;
      this.myString = "look how this string also does not update while in this .subscribe method...";

      
    });
    // this.us.getSelectUser().subscribe((num: number) => {
    //   console.log("this is num: " + num);
    //   this.id = num;
    //   this.myString = 'is now modified';
    // });
    console.log("this.id in edit: " + this.id);
    console.log("this.myString in edit: " + this.myString);

    this.sub = this.us.getUser(this.id).subscribe(user => {
      this.user = user;
    });
  }

  


}
