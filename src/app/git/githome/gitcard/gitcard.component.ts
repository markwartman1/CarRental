import { Component, Input, OnInit } from '@angular/core';
import { GitusersService } from '../../GitService/gitusers.service';

@Component({
  selector: 'app-gitcard',
  templateUrl: './gitcard.component.html',
  styleUrls: ['./gitcard.component.css']
})
export class GitcardComponent implements OnInit {

  @Input() id;
  @Input() username;
  @Input() url;

  constructor(private gs: GitusersService) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.gs.deleteUser(id)
  }

}
