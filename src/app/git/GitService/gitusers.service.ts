import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitUsers } from 'src/app/Models/GitUsers';

@Injectable({
  providedIn: 'root'
})
export class GitusersService {

  giturl: string = 'https://api.github.com/users';
  //gitUsers: GitUsers[];

  constructor(private http: HttpClient) { }

  getListGitUsers():Observable<GitUsers[]> {
    return this.http.get<GitUsers[]>(this.giturl);
  }
}
