import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Novedad} from '../models/novedad';
import { URL } from '../app/app.config';

/*
  Generated class for the NovedadesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NovedadesService {

  constructor(public http: Http) {
    console.log('Hello NovedadesService Provider');
  }

  all(): Observable<Novedad[]> {
    return this.http.get(URL + "/novedades").map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  getOne(id:string): Observable<Novedad>{
    return this.http.get(URL + "/novedades/"+ id).map(response => {
      return response.json();      
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  
    
  
}
