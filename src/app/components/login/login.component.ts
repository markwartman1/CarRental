import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private as: AuthService,
    private router: Router) {

    this.loginForm = new FormGroup({
      "username": new FormControl(null, [Validators.required, Validators.minLength(2)]),
      "password": new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmitLoginForm() {

    console.log("it ran");
    console.log(this.loginForm);

    let id: number = +this.loginForm.value.password;


    this.as.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(res => {
      if (res) {
        console.log('res is true');
        console.log(JSON.stringify(res));
        this.router.navigate(['/welcome']);
      } else if (!res) {
        // I think res will always run...

        console.log('res is False !!');
      }
    });



  }

}
