import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { JuegosDestacadoComponent } from './juegos-destacado/juegos-destacado.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
