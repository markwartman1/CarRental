import { Component, OnInit } from '@angular/core';
import { GitUsers } from 'src/app/Models/GitUsers';
import { GitusersService } from '../GitService/gitusers.service';

@Component({
  selector: 'app-githome',
  templateUrl: './githome.component.html',
  styleUrls: ['./githome.component.css']
})
export class GithomeComponent implements OnInit {

  gitUsers: GitUsers[];
  //user: GitUsers;

  constructor(private gus: GitusersService) { }

  ngOnInit(): void {

    this.gus.getListGitUsers().subscribe(res => {
      //this.gus.gitUsers.next(res);  ... ... ... getting Maximum call stack size exceeded ???
      this.gitUsers = res;
    });
  }

  onBtn() {
    // this.gus.getListGitUsers().subscribe(res => {
    //   this.gitUsers = res;
    // });
  }

}
