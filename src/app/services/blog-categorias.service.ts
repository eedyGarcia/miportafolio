import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogCategoriasService {
  _url = 'https://api.hadronti-s1.com/get-categorias';
  constructor(private http: HttpClient) {}
  
  getCategorias(){
    let header = new Headers()
    .set('Type-content','aplication/json')
    return this.http.get(this._url);
  }
}
