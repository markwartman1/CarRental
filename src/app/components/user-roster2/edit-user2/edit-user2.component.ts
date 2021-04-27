import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  editUserForm: FormGroup;

  constructor(private us: UserService) { 

    this.editUserForm = new FormGroup({
      'username' : new FormControl(null, [Validators.minLength(2), Validators.required])
    });
  }
  
  ngOnInit(): void {
    
    this.getUser();
    
  }
  
  getUser() {
    this.sub = this.us.selectedUserObject.subscribe(u => this.user = u);
    this.editUserForm.controls.username.setValue(this.user.name);
    //setValue.name = this.user.name;
  }

  onEdit() {
    this.user.name = this.editUserForm.value.username;
    this.us.updateUser(this.user).subscribe(
      data => console.log("success: " + data),
      error => console.log("error: " + error)
      
    );
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
