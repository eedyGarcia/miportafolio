import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../../services/blog-post.service';
import {BlogPost} from '../../interfaces/blog-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,BlogPost {
  public _post:string = '';

  public id_post:       string = '';
  public id_usuario:    string = '';
  public id_categoria:  string = '';
  public imagen:        string = '';
  public titulo:        string = '';
  public resumen:       string = '';
  public contenido:     string = '';
  public status:        string = '';
  public fecha:         Date = new Date();
  public actualizacion: Date = new Date();

  constructor(
    private activeRoute: ActivatedRoute,
    private BlogPostService:BlogPostService) {

      this.activeRoute.queryParams.subscribe((qp) => {
        this._post = this.activeRoute.snapshot.params['post']
      });

      this.BlogPostService.getPost(this._post).subscribe(resp=>{
        this.id_post = resp.id_post;
        this.id_usuario = resp.id_usuario;
        this.id_categoria = resp.id_categoria;
        this.imagen = resp.imagen;
        this.titulo = resp.titulo;
        this.resumen = resp.resumen;
        this.contenido = resp.contenido;
        this.status = resp.status;
        this.fecha = resp.fecha;
        this.actualizacion = resp.actualizacion;
      });
  }

  ngOnInit(): void {
  }

}
