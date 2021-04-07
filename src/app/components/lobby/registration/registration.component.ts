import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  subb: boolean;
  data = {
    username : '',
    email : '',
    gender : ''
  };

  constructor() { 

    this.signupForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender' : new FormControl('male')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value.username);
    console.log(this.signupForm.value.email);
    console.log(this.signupForm.value.gender);
    
    if (this.signupForm.invalid) { // might never use this becuase button is disabled till valid
      return this.signupForm;
    }
    
    
    this.data.username = this.signupForm.value.username;
    this.data.email = this.signupForm.value.email;
    this.data.gender = this.signupForm.value.gender;
    this.subb = true;

    this.signupForm.reset();
  }

}
