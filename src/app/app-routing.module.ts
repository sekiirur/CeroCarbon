import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { NuestrosHuertosComponent } from './nuestros-huertos/nuestros-huertos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LoginComponent } from './login/login.component';
import { HuertosComponent } from './backoffice/huertos/huertos.component';
import { UsuariosComponent } from './backoffice/usuarios/usuarios.component';
import { FormularioHuertoNewComponent } from './backoffice/formulario-huerto-new/formulario-huerto-new.component';
const routes: Routes = [
  {path:'',component: HomeComponent, pathMatch:'full'},
  {path:'alquiler/:id ',component: AlquilerComponent},
  {path:'alquiler',component: AlquilerComponent},
  {path:'nuestros huertos',component: NuestrosHuertosComponent},
  {path:'quienes somos',component: QuienesSomosComponent},
  {path:'servicios',component: ServiciosComponent},
  {path:'login',component: LoginComponent},
  {path:'gestionHuertos', component: HuertosComponent},
  {path:'gestionServicios', component: ServiciosComponent},
  {path:'gestionUsuarios', component: UsuariosComponent},
  {path:'formularioHuertoNew', component: FormularioHuertoNewComponent},
  {path:'formularioHuertoEdit/:huertoID', component: FormularioHuertoNewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
