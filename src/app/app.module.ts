import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { NuestrosHuertosComponent } from './nuestros-huertos/nuestros-huertos.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GestionComponent } from './backoffice/gestion/gestion.component';
import { HuertosComponent } from './backoffice/huertos/huertos.component';
import { UsuariosComponent } from './backoffice/usuarios/usuarios.component';
import { ServicesComponent } from './backoffice/services/services.component';
import { FormularioHuertoNewComponent } from './backoffice/formulario-huerto-new/formulario-huerto-new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    AlquilerComponent,
    NuestrosHuertosComponent,
    LoginComponent,
    FooterComponent,
    GestionComponent,
    HuertosComponent,
    UsuariosComponent,
    ServicesComponent,
    FormularioHuertoNewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
