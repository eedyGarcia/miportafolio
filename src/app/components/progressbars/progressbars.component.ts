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
      {'habilidad':'Git', 'porcentaje':80, 'tipo':'gestion2'},
      {'habilidad':'cPanel', 'porcentaje':80, 'tipo':'gestion2'},
      {'habilidad':'Firebase', 'porcentaje':50, 'tipo':'gestion2'},
      {'habilidad':'Cloud Flare', 'porcentaje':70, 'tipo':'gestion2'},
      {'habilidad':'Google Cloud', 'porcentaje':30, 'tipo':'gestion2'},
      {'habilidad':'Azure', 'porcentaje':30, 'tipo':'gestion2'},
      {'habilidad':'Digital Ocean', 'porcentaje':40, 'tipo':'gestion2'},
      {'habilidad':'Heroku', 'porcentaje':40, 'tipo':'gestion2'},
      {'habilidad':'Inglés', 'porcentaje':60, 'tipo':'gestion1'},
      {'habilidad':'SCRUM Master', 'porcentaje':100, 'tipo':'gestion1'},
      {'habilidad':'Project Manager Profesional', 'porcentaje':90, 'tipo':'gestion1'},
      {'habilidad':'Metodologías ágiles', 'porcentaje':70, 'tipo':'gestion1'},
      {'habilidad':'PHP', 'porcentaje':100, 'tipo':'backend'},
      {'habilidad':'Laravel', 'porcentaje':90, 'tipo':'backend'},
      {'habilidad':'NodeJS', 'porcentaje':60, 'tipo':'backend'},
      {'habilidad':'Creación API REST', 'porcentaje':90, 'tipo':'backend'},
      {'habilidad':'MySQL', 'porcentaje':80, 'tipo':'backend'},
      {'habilidad':'MS SQL', 'porcentaje':40, 'tipo':'backend'},
      {'habilidad':'MongoDB', 'porcentaje':40, 'tipo':'backend'},
      {'habilidad':'HTML 5', 'porcentaje':100, 'tipo':'frontend'},
      {'habilidad':'JavaScript', 'porcentaje':95, 'tipo':'frontend'},
      {'habilidad':'Jquery', 'porcentaje':100, 'tipo':'frontend'},
      {'habilidad':'Angular', 'porcentaje':85, 'tipo':'frontend'},
      {'habilidad':'React', 'porcentaje':60, 'tipo':'frontend'},
      {'habilidad':'React Native', 'porcentaje':50, 'tipo':'frontend'},
      {'habilidad':'Flutter', 'porcentaje':90, 'tipo':'frontend'},
      {'habilidad':'Consumo API REST', 'porcentaje':100, 'tipo':'frontend'},
      {'habilidad':'CSS 3', 'porcentaje':90, 'tipo':'frontend'},
      {'habilidad':'Bootstrap 4', 'porcentaje':100, 'tipo':'frontend'},
      {'habilidad':'Bootstrap 5', 'porcentaje':100, 'tipo':'frontend'},
      {'habilidad':'Material', 'porcentaje':80, 'tipo':'frontend'},
      {'habilidad':'Figma', 'porcentaje':40, 'tipo':'frontend'}
    ];
  }

  ngOnInit(): void {
  }

}
