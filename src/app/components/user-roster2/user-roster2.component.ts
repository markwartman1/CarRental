import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/Models/Users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-roster2',
  templateUrl: './user-roster2.component.html',
  styleUrls: ['./user-roster2.component.css']
})
export class UserRoster2Component implements OnInit {

  sub: Subscription;
  users: Users[];

  constructor( 
    public us : UserService,
    private router: Router) 
  { }

  ngOnInit(): void {

    this.sub = this.us.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onClickEditBio(user: Users) {
    //console.log("id: " + id);
    //this.us.selectedUser.next(user);
    this.us.setSelectedUserObject(user); // sending the user to the service
    this.router.navigate(['users2/edit-user2']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
