import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-linkchildnested',
  templateUrl: './linkchildnested.component.html',
  styleUrls: ['./linkchildnested.component.css']
})
export class LinkchildnestedComponent implements OnInit {

  @Output()
  message: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  passData() {
    this.message.emit("special string data form Child");
  }

}
