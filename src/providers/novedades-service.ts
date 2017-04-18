import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Novedad } from '../models/novedad';
import { URL } from '../app/app.config';


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

  getOne(id: string): Observable<Novedad> {
    return this.http.get(URL + "/novedades/" + id).map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  add(novedad: Novedad): Observable<boolean > {
    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);

    return this.http.post(URL + "/novedades", novedad, options).map(response => {
      let body = response.json();
      return body.success;
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  getbyalmacen(almacen: string): Observable<Novedad[]> {
    return this.http.get(URL + "/novedades/almacen/" + almacen).map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(true);
    });
  }

  getbytipo(tipo: string): Observable<Novedad[]>{
    return this.http.get(URL + "/novedades/tipo/" + tipo).map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(true);
    });
  }

  delete(id: string): Observable<boolean>{
    return this.http.delete(URL + "/novedades/" + id).map(response =>{
      let body = response.json();
      return body.success; 
    }).catch(err =>{
      return Observable.throw(err);
    })
  }




}
