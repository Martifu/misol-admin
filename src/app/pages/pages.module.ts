import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import localEs from '@angular/common/locales/es'
import { registerLocaleData } from "@angular/common";
registerLocaleData(localEs,'es')

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarComponent } from './usuarios/actualizar/actualizar.component';
import { UnidadesComponent } from './usuarios/unidades/unidades.component';
import { NuevaComponent } from './usuarios/unidades/nueva/nueva.component';


@NgModule({
  providers:[
    {provide:LOCALE_ID,useValue:'es'}
  ],
  declarations: [
    DashboardComponent,
    PagesComponent,
    UsuariosComponent,
    PendientesComponent,
    NopagefoundComponent,
    NuevoComponent,
    ActualizarComponent,
    UnidadesComponent,
    NuevaComponent, 
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
