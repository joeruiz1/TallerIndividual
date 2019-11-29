import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistrarEncuestadorComponent } from './registrar-encuestador/registrar-encuestador.component';
import { RegistraEncuestaComponent  } from './registrar-encuesta/registrar-encuesta.component';
import { VisualizarEncuestasComponent } from './visualizar-encuestas/visualizar-encuestas.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MenuPrincipalComponent, RegistraEncuestaComponent , RegistrarEncuestadorComponent, VisualizarEncuestasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
