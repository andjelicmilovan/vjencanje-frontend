import { MedjunarodniComponent } from './medjunarodni/medjunarodni.component';
import { CirilicaComponent } from './cirilica/cirilica.component';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';
import { GuardGuard } from './guard.guard';
import { OdbornikComponent } from './odbornik/odbornik.component';
import { DetaljiComponent } from './detalji/detalji.component';
import { PretraziComponent } from './pretrazi/pretrazi.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaticarComponent } from './maticar/maticar.component';

const routes: Routes = [
  {path: '', redirectTo: 'login' , pathMatch: 'full' },
  {path: 'dodaj', component:DodajComponent, canActivate:[GuardGuard] },
  {path: 'pretrazi', component:PretraziComponent, canActivate:[GuardGuard]},
  {path: 'pretrazi/:id', component:DetaljiComponent},
  {path: 'login', component:LoginComponent},
  {path: 'maticar', component:MaticarComponent, canActivate:[GuardGuard]},
  {path: 'odbornik', component:OdbornikComponent, canActivate:[GuardGuard]},
  {path:'rezervacije', component:RezervacijeComponent},
  {path:'cirilica/:id', component:CirilicaComponent},
  {path:'medjunarodni/:id', component:MedjunarodniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
