import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarVisitaService {
  _url:string = `https://api.hadronti-s1.com/visitant/`;

  constructor(private http: HttpClient) {}
  
  saveVisitant(){
    let header = new Headers()
    .set('Type-content','aplication/json')
    return this.http.get(this._url);
  }
}
