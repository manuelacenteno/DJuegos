import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegosDestacadoComponent } from './juegos-destacado/juegos-destacado.component';
import { JuegosListComponent } from './juegos-list/juegos-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: JuegosDestacadoComponent,
  },
  {
    path: 'busqueda',
    component: BusquedaComponent,
  },{
    path: 'juego',
    component:JuegoComponent,
  },
  {path: 'accion',
  component:JuegosListComponent ,}
  ,
  {path: 'multijugador',
  component:JuegosListComponent ,}
  ,
  {path: 'aventura',
  component:JuegosListComponent ,}
  ,
  {path: 'clasico',
  component:JuegosListComponent ,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
