import { Component, OnInit} from '@angular/core';
import { BlogCategoriasService } from '../../services/blog-categorias.service';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public categorias:Array<any> = [];
  constructor(
    private BlogCategoriasService:BlogCategoriasService
  ) {
    this.BlogCategoriasService.getCategorias().subscribe((resp:any)=>{
      this.categorias = resp.data;
    })
  }

  ngOnInit(): void {
  }

}
