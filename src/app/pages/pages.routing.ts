import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { AuthGuard } from "../guards/auth.guard";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PendientesComponent } from "./pendientes/pendientes.component";
import { NuevoComponent } from "./usuarios/nuevo/nuevo.component";
import { ActualizarComponent } from "./usuarios/actualizar/actualizar.component";
import { UnidadesComponent } from "./usuarios/unidades/unidades.component";
import { NuevaComponent } from "./usuarios/unidades/nueva/nueva.component";

const routes: Routes = [
    
  { path:'dashboard',
    component:PagesComponent,
    children: [ 
      {
        path:'', component:DashboardComponent, canActivate: [AuthGuard],
      },
    {
      path:'usuarios', component:UsuariosComponent, canActivate: [AuthGuard],

    },{
      path:'usuarios/nuevo', component:NuevoComponent, canActivate: [AuthGuard],
    },{
      path:'usuario/:id', component:ActualizarComponent, canActivate: [AuthGuard],
    },{
      path:'usuario/unidades/:id', component:UnidadesComponent, canActivate: [AuthGuard],
    },{
      path:'usuario/unidades/nueva/:id', component:NuevaComponent, canActivate: [AuthGuard],
    },
    {
      path:'pendientes', component:PendientesComponent, canActivate: [AuthGuard],

    }
  ]
},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule {}