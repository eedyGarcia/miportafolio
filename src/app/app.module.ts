import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ProgressbarsComponent } from './components/progressbars/progressbars.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { CuoteComponent } from './components/cuote/cuote.component';
import { PortafolioHomeComponent } from './components/portafolio-home/portafolio-home.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BienvenidaComponent,
    ProgressbarsComponent,
    AcercaDeMiComponent,
    InicioComponent,
    BlogComponent,
    FooterComponent,
    CuoteComponent,
    PortafolioHomeComponent,
    BlogHomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
