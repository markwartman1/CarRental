import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string = "default";
  subscription: Subscription;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {

    this.subscription = this.messageService.message.subscribe(mess => this.message = mess);
  }

}
