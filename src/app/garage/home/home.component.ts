import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../service/message.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  message: string = "default";
  subscription: Subscription;

  constructor(public messageService: MessageService, private router: Router) { }
  
  ngOnInit(): void {
    
    this.subscription = this.messageService.message.subscribe(mess => this.message = mess);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navToMessage() {
    this.router.navigate(['message']);
  }
}
