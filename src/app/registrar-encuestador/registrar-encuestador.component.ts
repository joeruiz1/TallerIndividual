import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-registrar-encuestador',
  templateUrl: './registrar-encuestador.component.html',
  styleUrls: ['./registrar-encuestador.component.css']
})
export class RegistrarEncuestadorComponent implements OnInit {

      public id: string;
  constructor(private route: ActivatedRoute) {
  route.params.subscribe(
    params=>{this.id=params['id']})
  }

  ngOnInit() {
  }

}