import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { FirestoreService } from 'src/app/services/firestore.service';


declare var $: any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit  {

  usuarios: Usuario[] = [];
  unidades: any[] = [];
  cargando: boolean = true;
  constructor(public firestoreService: FirestoreService) {
   }

   

  ngOnInit(): void {
    this.cargarUsuarios();
    
  }

  cargarUsuarios(){
    this.cargando=true;
    this.firestoreService.getUsers().subscribe((resp)=>{
      this.usuarios = resp.map((doc)=>new Usuario(doc.payload.doc.id,doc.payload.doc.data().celular,doc.payload.doc.data().correo,doc.payload.doc.data().estado,doc.payload.doc.data().nombre,doc.payload.doc.data().telefono,doc.payload.doc.data().tipoUsuario))
      this.cargando = false;
    })
  }

  buscar(busqueda:string){
    this.cargando=true;
    this.firestoreService.buscar(busqueda).subscribe((resp)=>{
      this.usuarios = resp.map((doc)=>new Usuario(doc.payload.doc.id,doc.payload.doc.data().celular,doc.payload.doc.data().correo,doc.payload.doc.data().estado,doc.payload.doc.data().nombre,doc.payload.doc.data().telefono,doc.payload.doc.data().tipoUsuario))
      this.cargando = false;
    })
  }

  buscarEstatus(status:string){
    this.cargando=true;
    this.firestoreService.buscarStatus(status).subscribe((resp)=>{
      this.usuarios = resp.map((doc)=>new Usuario(doc.payload.doc.id,doc.payload.doc.data().celular,doc.payload.doc.data().correo,doc.payload.doc.data().estado,doc.payload.doc.data().nombre,doc.payload.doc.data().telefono,doc.payload.doc.data().tipoUsuario))
      this.cargando = false;
    })
  }

  getUnidades(id:string){
    this.firestoreService.getUnidadesDeUsuario(id).subscribe((resp)=>{
      this.unidades = resp.map((doc)=>{
        return Object.assign(doc.payload.doc.data(), {id: doc.payload.doc.id});
        
      })
      console.log(this.unidades);
    })
  }

  

}
