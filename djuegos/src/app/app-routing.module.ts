import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { JuegosDestacadoComponent } from './juegos-destacado/juegos-destacado.component';
import { PerfilComponent } from './perfil/perfil.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
