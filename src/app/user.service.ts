import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private usersEndpoint = "https://jsonplaceholder.typicode.com/users";

  getUser() : Observable<any> {
    debugger;
    return this.http.get(this.usersEndpoint).pipe();
  }
}
