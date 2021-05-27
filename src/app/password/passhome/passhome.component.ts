import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passhome',
  templateUrl: './passhome.component.html',
  styleUrls: ['./passhome.component.css']
})
export class PasshomeComponent implements OnInit {

  length: number = 0;
  isNum: boolean = false;
  isCase: boolean = false;
  isSym: boolean = false;
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  generate(){
    const myletters = 'abcdefghijklmnopqrstuvwxyz';
    const mynum = '1234567890';
    const mysym = '!@#$%^&*()_-';
    let validChars = '';
    console.log(this.length);
    //this.password = 'hello';

    if(this.isNum) validChars += mynum;
    if(this.isCase) validChars += myletters;
    if(this.isSym) validChars += mysym;

    this.password = '';
    for(let i = 1; i <= this.length; i++){
      let ran = Math.floor(Math.random() * validChars.length);
      console.log('here is ran: ' + ran);
      this.password += validChars.charAt(ran);
    }
  }

  doNum() {
    this.isNum = !this.isNum;
    console.log(this.isNum);
  }

  doLetters() {
    this.isCase = !this.isCase;
    console.log(this.isCase);
  }

  doSym() {
    this.isSym = !this.isSym;
    console.log(this.isSym);
  }

  inputLength(length: number) {
    this.length = length;
    console.log(this.length);
  }


}
