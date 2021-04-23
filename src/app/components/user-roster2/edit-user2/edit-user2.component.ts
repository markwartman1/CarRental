import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/Models/Users';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user2',
  templateUrl: './edit-user2.component.html',
  styleUrls: ['./edit-user2.component.css']
})
export class EditUser2Component implements OnInit, OnDestroy {

  user: Users;
  sub: Subscription;

  constructor(private us: UserService) { }
  
  ngOnInit(): void {
    
    this.getUser();
    
  }
  
  getUser() {
    this.sub = this.us.selectedUserObject.subscribe(u => this.user = u);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
