import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messageprompt',
  templateUrl: './messageprompt.component.html',
  styleUrls: ['./messageprompt.component.css']
})
export class MessagepromptComponent implements OnInit {

  message: string = "default";
  subscription: Subscription;

  constructor(public messageService: MessageService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    
    this.subscription = this.messageService.message.subscribe(mess => this.message = mess);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navToMessage() {
    // this would not work without relativeTo argument
    this.router.navigate(['message'], {relativeTo: this.route});
  }

}
