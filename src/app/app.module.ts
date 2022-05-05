import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ProgressbarsComponent } from './components/progressbars/progressbars.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { CuoteComponent } from './components/cuote/cuote.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BienvenidaComponent,
    ProgressbarsComponent,
    ActividadesComponent,
    AcercaDeMiComponent,
    InicioComponent,
    PortafolioComponent,
    BlogComponent,
    FooterComponent,
    CuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
