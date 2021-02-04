import { Component, OnInit } from '@angular/core';

import { Pendiente } from 'src/app/models/pendiente';
import { PendienteService } from 'src/app/services/pendiente.service';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Usuario } from 'src/app/models/usuario';




@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: []
})
export class PendientesComponent implements OnInit {

  public cargando: boolean = true;

  pendientes: Pendiente[] = []; 
  
  constructor(public firestoreService: PendienteService) {}

  

  ngOnInit(): void {
    this.cargando = true;

    this.firestoreService.getPendientes().subscribe((resp)=>{
      this.pendientes =  resp.map((doc) => new Pendiente(doc.payload.doc.data().cliente, doc.payload.doc.data().asesor, doc.payload.doc.data().unidad, doc.payload.doc.data().fechaVisita, doc.payload.doc.data().tipoCita, doc.payload.doc.data().tipoServicio, doc.payload.doc.data().mesEstablecido));
      this.cargando = false;
      console.log(this.pendientes);
    })
  }
    

  

  mostrarUnidad()
  {
  }

}  

