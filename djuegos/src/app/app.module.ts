import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { FooterComponent } from './footer/footer.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { JuegosDestacadoComponent } from './juegos-destacado/juegos-destacado.component';
import { JuegosListComponent } from './juegos-list/juegos-list.component';
import { BarraVerticalComponent } from './barra-vertical/barra-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    FooterComponent,
    PublicidadComponent,
    FormLoginComponent,
    JuegosDestacadoComponent,
    JuegosListComponent,
    BarraVerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
