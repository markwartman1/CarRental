import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gitcard',
  templateUrl: './gitcard.component.html',
  styleUrls: ['./gitcard.component.css']
})
export class GitcardComponent implements OnInit {

  @Input() id;
  @Input() username;
  @Input() url;

  constructor() { }

  ngOnInit(): void {
  }

}
