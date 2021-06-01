import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  messageHere: string;

  constructor() { }

  ngOnInit(): void {
  }

  parentMethod(str: string) {
    this.messageHere = str;
  }
}
