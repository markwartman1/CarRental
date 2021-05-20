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
  user: GitUsers;

  constructor(private gus: GitusersService) { }

  ngOnInit(): void {

    
  }

  onBtn() {
    this.gus.getListGitUsers().subscribe(res => {
      //console.log('hey this ran...');
      //console.log(res);
      //console.log(JSON.stringify(res));
      this.gitUsers = res;
      
      // res.forEach(u => {
      //   this.user.login = u.login;
      //   this.user.id = u.id;
      //   this.user.avatar_url = u.avatar_url;
      //   this.gitUsers.push(this.user);
      // });
    });
  }

}
