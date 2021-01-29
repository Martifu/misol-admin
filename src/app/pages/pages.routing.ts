import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { CitasComponent } from "./citas/citas.component";
import { AuthGuard } from "../guards/auth.guard";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PendientesComponent } from "./pendientes/pendientes.component";

const routes: Routes = [
    
  { path:'dashboard',
    component:PagesComponent,
    children: [
      {
        path:'', component:DashboardComponent, canActivate: [AuthGuard],
      },
    {
      path:'citas', component:CitasComponent, canActivate: [AuthGuard],
    },
    {
      path:'usuarios', component:UsuariosComponent, canActivate: [AuthGuard],

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