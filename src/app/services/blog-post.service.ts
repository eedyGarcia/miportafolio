import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../interfaces/blog-post';

@Injectable({
  providedIn: 'root'
})

export class BlogPostService {
  _id_post = '';
  _url = '';

  constructor(private http: HttpClient) {
    this._url = `https://api.hadronti-s1.com/get-post/?post=`;
  }
  
  getPost(id_post:string){
    this._url+=id_post;
    let header = new Headers()
    .set('Type-content','aplication/json')
    return this.http.get<BlogPost>(this._url);
  }
}

