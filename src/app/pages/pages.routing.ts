import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { CitasComponent } from "./citas/citas.component";
import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
    
  { path:'admin',
    component:PagesComponent,
    children: [
    {path:'', component:CitasComponent, canActivate: [AuthGuard]},
  ]
},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagesRoutingModule {}