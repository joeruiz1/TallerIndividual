import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{RouterModule,Routes}from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistrarEncuestadorComponent } from './registrar-encuestador/registrar-encuestador.component';
import { RegistraEncuestaComponent  } from './registrar-encuesta/registrar-encuesta.component';
import { VisualizarEncuestasComponent } from './visualizar-encuestas/visualizar-encuestas.component';

const appRoutes:Routes=[
  {path:'',component:MenuPrincipalComponent},
  {path :'registrar-encuestador',component:RegistrarEncuestadorComponent},
  {path :'registrar-encuesta',component:RegistraEncuestaComponent},
  {path :'visualizar-encuestas',component:VisualizarEncuestasComponent}  

]



@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(appRoutes)
   ],
  declarations: [ AppComponent, HelloComponent, MenuPrincipalComponent, RegistraEncuestaComponent , RegistrarEncuestadorComponent, VisualizarEncuestasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
