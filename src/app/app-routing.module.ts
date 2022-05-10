import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { BlogComponent } from './components/blog/blog.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'acerca-de-mi', component:AcercaDeMiComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/post/:post', component:PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
