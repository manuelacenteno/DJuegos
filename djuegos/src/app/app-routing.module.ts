import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegosDestacadoComponent } from './juegos-destacado/juegos-destacado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { JuegosListComponent } from './juegos-list/juegos-list.component';
import { CuatroLineaComponent } from './cuatro-linea/cuatro-linea.component';


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
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  }
  ,{
    path: 'juego',
    component:JuegoComponent,
  },
  {path: 'accion',
  component:JuegosListComponent ,}
  ,
  {path: 'multijugador',
  component:JuegosListComponent ,}
  ,
  {path: 'aventuras',
  component:JuegosListComponent ,}
  ,
  {path: 'clasicos',
  component:JuegosListComponent ,}
  ,
  {path: 'cuatroLinea',
  component:CuatroLineaComponent ,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
