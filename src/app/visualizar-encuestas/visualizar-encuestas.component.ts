import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-visualizar-encuestas',
  templateUrl: './visualizar-encuestas.component.html',
  styleUrls: ['./visualizar-encuestas.component.css']
})
export class VisualizarEncuestasComponent implements OnInit {

    public id: string;
  constructor(private route: ActivatedRoute) {
  route.params.subscribe(
    params=>{this.id=params['id']})
  }
  ngOnInit() {
  }

}