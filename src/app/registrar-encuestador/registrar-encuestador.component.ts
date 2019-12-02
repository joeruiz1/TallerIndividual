import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-registrar-encuestador',
  templateUrl: './registrar-encuestador.component.html',
  styleUrls: ['./registrar-encuestador.component.css']
})
export class RegistrarEncuestadorComponent implements OnInit {

      public id: string;
      public idEncuestador:number;
      public nombreEncuestador:string;
      public cedula:number;
  constructor(private route: ActivatedRoute) {
  route.params.subscribe(
    params=>{this.id=params['id']})
  }
    EnviarDatos(id:string,idEncuestador:number,nombreEncuestador:string,cedula:number){
    this.id=id;
    this.idEncuestador=idEncuestador
    this.nombreEncuestador=nombreEncuestador;
    this.cedula=cedula;  
    }
   
    MostrarDatos(){
      return(this.id,this.idEncuestador,this.nombreEncuestador,this.cedula);
    }

  ngOnInit() {
  }

}