import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { BlogComponent } from './components/blog/blog.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'acerca-de-mi', component:AcercaDeMiComponent},
  {path:'portafolio', component:PortafolioComponent},
  {path:'blog', component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
