import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portafolio-home',
  templateUrl: './portafolio-home.component.html',
  styleUrls: ['./portafolio-home.component.css']
})
export class PortafolioHomeComponent implements OnInit {
  logosDev:any[]
  constructor() { 
    this.logosDev = [
      {
        'imagen':'assets/img/logos/dev/angular.png', 
        'nombre':'Angular'
      },
      {
        'imagen':'assets/img/logos/dev/react.png', 
        'nombre':'React'
      },
      {
        'imagen':'assets/img/logos/dev/flutter.png', 
        'nombre':'Flutter'
      },
      {
        'imagen':'assets/img/logos/dev/bootstrap.png', 
        'nombre':'Bootstrap'
      },
      {
        'imagen':'assets/img/logos/dev/illustrator.png', 
        'nombre':'Illustrator'
      },
      {
        'imagen':'assets/img/logos/dev/figma.png', 
        'nombre':'Figma'
      },
      {
        'imagen':'assets/img/logos/dev/git.png', 
        'nombre':'Git'
      },
      {
        'imagen':'assets/img/logos/dev/github.png', 
        'nombre':'GitHub'
      },
      {
        'imagen':'assets/img/logos/dev/html.png', 
        'nombre':'HTML 5'
      },
      {
        'imagen':'assets/img/logos/dev/css.png', 
        'nombre':'CSS 3'
      },
      {
        'imagen':'assets/img/logos/dev/javascript.png', 
        'nombre':'JavaScript'
      },
      {
        'imagen':'assets/img/logos/dev/cloudflare.png', 
        'nombre':'CloudFlare'
      },
      {
        'imagen':'assets/img/logos/dev/firebase.png', 
        'nombre':'Firebase'
      },
      {
        'imagen':'assets/img/logos/dev/laravel.png', 
        'nombre':'Laravel'
      },
      {
        'imagen':'assets/img/logos/dev/mysql.png', 
        'nombre':'MySQL'
      },
      {
        'imagen':'assets/img/logos/dev/node.png', 
        'nombre':'NodeJS'
      },
      {
        'imagen':'assets/img/logos/dev/tscript.png', 
        'nombre':'TypeScript'
      },
      {
        'imagen':'assets/img/logos/dev/vscode.png', 
        'nombre':'VS Code'
      },
    ]
  }

  ngOnInit(): void {
  }

}
