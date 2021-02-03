import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';



@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: []
})
export class PendientesComponent implements OnInit {

  public cargando: boolean = true;
  pendientes: Usuario[] = []; 
  constructor(public firestoreService: FirestoreService) {
   }
 

  ngOnInit(): void {
    this.cargando = true;
    this.firestoreService.getUsers().subscribe((resp)=>{
      this.pendientes = resp.map((doc)=>new Usuario(doc.payload.doc.id,doc.payload.doc.data().celular,doc.payload.doc.data().correo,doc.payload.doc.data().estado,doc.payload.doc.data().nombre,doc.payload.doc.data().telefono,doc.payload.doc.data().tipoUsuario))
      this.cargando = false;
    })

  }

}
