import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
  }

  setMessage(event) {
    console.log(event.value);
    this.messageService.setMessage(event.value);
    this.router.navigate(['/garage']);
  }

}
