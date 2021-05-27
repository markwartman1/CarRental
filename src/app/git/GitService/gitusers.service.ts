import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GitUsers } from 'src/app/Models/GitUsers';

@Injectable({
  providedIn: 'root'
})
export class GitusersService {

  giturl: string = 'https://api.github.com/users';
  gitUsersSub: BehaviorSubject<GitUsers[]> = new BehaviorSubject<GitUsers[]>(null);
  gitUsers: GitUsers[] = [];

  constructor(private http: HttpClient) { }

  getListGitUsers(): Observable<GitUsers[]> {

    // THIS DOES NOT MAKE SENSE
    if (this.gitUsersSub.value !== null) {
      console.log("cached users ran....  hehehe: " + this.gitUsersSub.value);
      return this.gitUsersSub.asObservable();
    } else {
      this.http.get<GitUsers[]>(this.giturl).subscribe(u => {
        this.gitUsers = u;
        this.gitUsersSub.next(this.gitUsers);
      });
      return this.gitUsersSub.asObservable();
      
    }
  }

  checkLength(): number {
    let num: number;
    this.gitUsersSub.subscribe(u => num = u.length - 1);
    return 0;
  }

  deleteUser(id: number) {
    this.gitUsers = this.gitUsers.filter(u => u.id !== id);
    this.gitUsersSub.next(this.gitUsers);
  }
}
