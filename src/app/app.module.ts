import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { PretraziComponent } from './pretrazi/pretrazi.component';
import { FormsModule } from '@angular/forms';
import { DetaljiComponent } from './detalji/detalji.component';
import { LoginComponent } from './login/login.component';
import { MaticarComponent } from './maticar/maticar.component';
import { OdbornikComponent } from './odbornik/odbornik.component';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';
import { CirilicaComponent } from './cirilica/cirilica.component';
import { MedjunarodniComponent } from './medjunarodni/medjunarodni.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DodajComponent,
    PretraziComponent,
    DetaljiComponent,
    LoginComponent,
    MaticarComponent,
    OdbornikComponent,
    RezervacijeComponent,
    CirilicaComponent,
    MedjunarodniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
