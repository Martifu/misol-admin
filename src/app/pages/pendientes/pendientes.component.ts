import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: []
})
export class PendientesComponent implements OnInit {

  public cargando: boolean = true;
  
  constructor() {
   }
 

  ngOnInit(): void {
    this.cargando = true;

  }

}
