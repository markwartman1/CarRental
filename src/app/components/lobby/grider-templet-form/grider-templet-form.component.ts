import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-grider-templet-form',
  templateUrl: './grider-templet-form.component.html',
  styleUrls: ['./grider-templet-form.component.css']
})
export class GriderTempletFormComponent implements OnInit {

  email: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(form: NgForm) {
    console.log("clicked !");
    console.log("entered value: " + form.value.email);
  }
}
