import { Component, OnInit } from '@angular/core';
import { RegistrarVisitaService } from '../../services/registrar-visita.service';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public data:Array<any> = [];
  constructor(
    RegistrarVisitaService:RegistrarVisitaService
  ) {
    if(!isDevMode()){
      RegistrarVisitaService.saveVisitant().subscribe((resp:any)=>{
        this.data = resp;
      });
    }
  }

  ngOnInit(): void {
  }

}
