import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { URL } from '../app/app.config';

@Injectable()
export class LoginService {

  constructor(public http: Http) { }

  signin(user: User) {

    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);

    return this.http.post(URL + "/users/signin", user, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

  login(username: string, password: string): Observable<{ success: boolean, user: any }> {
    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);

    const body = { username: username, password: password };
    return this.http.post(URL + "/users/login", body, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

}