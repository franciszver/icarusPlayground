import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Contact } from './shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class IcarusPlaygroundCrudService {
  apiUrl: string = `https:\\icarusAPI.pythonanywhere.com`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    console.log('calling get info');
    return this.http.get(this.apiUrl + '/data');
  }
}
