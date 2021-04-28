import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-message-iterate',
  templateUrl: './message-iterate.component.html',
  styleUrls: ['./message-iterate.component.css']
})
export class MessageIterateComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
