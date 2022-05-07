import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progressbars',
  templateUrl: './progressbars.component.html',
  styleUrls: ['./progressbars.component.css']
})
export class ProgressbarsComponent implements OnInit {
  
  habilidades:any[]

  constructor() { 
    this.habilidades = [
      {'habilidad':'Git', 'porcentaje':80, 'tipo':'gestion2', 'tag':'tagGit'},
      {'habilidad':'cPanel', 'porcentaje':80, 'tipo':'gestion2', 'tag':'tagCpanel'},
      {'habilidad':'Firebase', 'porcentaje':50, 'tipo':'gestion2', 'tag':'tagFirebase'},
      {'habilidad':'Cloud Flare', 'porcentaje':70, 'tipo':'gestion2', 'tag':'tagCloudFlare'},
      {'habilidad':'Google Cloud', 'porcentaje':30, 'tipo':'gestion2', 'tag':'tagGoogleCloud'},
      {'habilidad':'Azure', 'porcentaje':30, 'tipo':'gestion2', 'tag':'tagAzure'},
      {'habilidad':'Digital Ocean', 'porcentaje':40, 'tipo':'gestion2', 'tag':'tagDigitalOcean'},
      {'habilidad':'Heroku', 'porcentaje':40, 'tipo':'gestion2', 'tag':'tagHeroku'},
      {'habilidad':'Inglés', 'porcentaje':60, 'tipo':'gestion1', 'tag':'tagIngles'},
      {'habilidad':'SCRUM Master', 'porcentaje':100, 'tipo':'gestion1', 'tag':'tagSrumMaster'},
      {'habilidad':'Project Manager Profesional', 'porcentaje':90, 'tipo':'gestion1', 'tag':'tagProjectManagerProfesional'},
      {'habilidad':'Metodologías ágiles', 'porcentaje':70, 'tipo':'gestion1', 'tag':'tagMetodologíasAgiles'},
      {'habilidad':'PHP', 'porcentaje':100, 'tipo':'backend', 'tag':'tagPhp'},
      {'habilidad':'Laravel', 'porcentaje':90, 'tipo':'backend', 'tag':'tagLaravel'},
      {'habilidad':'NodeJS', 'porcentaje':60, 'tipo':'backend', 'tag':'tagNodeJS'},
      {'habilidad':'Express', 'porcentaje':85, 'tipo':'backend', 'tag':'tagExpress'},
      {'habilidad':'Creación API REST', 'porcentaje':90, 'tipo':'backend', 'tag':'tagCreacionApiRest'},
      {'habilidad':'MySQL', 'porcentaje':80, 'tipo':'backend', 'tag':'tagMySsql'},
      {'habilidad':'MS SQL', 'porcentaje':40, 'tipo':'backend', 'tag':'tagMsSql'},
      {'habilidad':'MongoDB', 'porcentaje':40, 'tipo':'backend', 'tag':'tagMongoDb'},
      {'habilidad':'HTML 5', 'porcentaje':100, 'tipo':'frontend', 'tag':'tagHtml5'},
      {'habilidad':'JavaScript', 'porcentaje':95, 'tipo':'frontend', 'tag':'tagJavaScript'},
      {'habilidad':'Jquery', 'porcentaje':100, 'tipo':'frontend', 'tag':'tagjQuery'},
      {'habilidad':'Angular', 'porcentaje':85, 'tipo':'frontend', 'tag':'tagAngular'},
      {'habilidad':'React', 'porcentaje':60, 'tipo':'frontend', 'tag':'tagReact'},
      {'habilidad':'React Native', 'porcentaje':50, 'tipo':'frontend', 'tag':'tagReactNative'},
      {'habilidad':'Flutter', 'porcentaje':90, 'tipo':'frontend', 'tag':'tagFlutter'},
      {'habilidad':'Consumo API REST', 'porcentaje':100, 'tipo':'frontend', 'tag':'tagConsumoApiRest'},
      {'habilidad':'CSS 3', 'porcentaje':90, 'tipo':'frontend', 'tag':'tagCss3'},
      {'habilidad':'Bootstrap 4', 'porcentaje':100, 'tipo':'frontend', 'tag':'tagBootstrap4'},
      {'habilidad':'Bootstrap 5', 'porcentaje':100, 'tipo':'frontend', 'tag':'tagBootstrap5'},
      {'habilidad':'Material', 'porcentaje':80, 'tipo':'frontend', 'tag':'tagMaterial'},
      {'habilidad':'Figma', 'porcentaje':40, 'tipo':'frontend', 'tag':'tagFigma'},
    ];
  }

  ngOnInit(): void {
  }

}
