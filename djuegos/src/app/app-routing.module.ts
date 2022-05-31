import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { JuegosListComponent } from './juegos-list/juegos-list.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'busqueda',
    component: JuegosListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
