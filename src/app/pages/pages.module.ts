import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    UsuariosComponent,
    PendientesComponent,
    NopagefoundComponent, 
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
