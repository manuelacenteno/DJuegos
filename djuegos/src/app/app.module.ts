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
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    FooterComponent,
    PublicidadComponent,
    FormLoginComponent,
    JuegosDestacadoComponent,
    JuegosListComponent,
    FormRegistroComponent,
    BusquedaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
