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
        {titulo:'Dashboard',url:'', icon: 'mdi-view-dashboard'},
        {titulo:'Citas',url:'citas', icon: 'mdi-book'},
        {titulo:'Pendientes',url:'pendientes', icon:'mdi-clipboard-text'},
        {titulo:'Usuarios',url:'usuarios', icon:'mdi-account-circle'},
        {titulo:'Asesores',url:'asesores', icon: 'mdi-account-settings-variant'},
      ]
    }
  ]

  constructor() { }
}
