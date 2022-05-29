import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { BarraVerticalComponent } from './barra-vertical/barra-vertical.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    component: FormLoginComponent,
  },{
    path:'menuVertical',
    component: BarraVerticalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
