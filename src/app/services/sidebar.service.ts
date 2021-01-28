import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Citas',url:'citas'},
        {titulo:'Pendientes',url:'pendientes'},
        {titulo:'Usuarios',url:'usuarios'},
        {titulo:'Asesores',url:'asesores'},
      ]
    }
  ]

  constructor() { }
}
