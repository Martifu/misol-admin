import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2';


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
  constructor(public usuarioService: UsuarioService) {
   }

   

  ngOnInit(): void {
    this.cargarUsuarios();
    
  }

  cargarUsuarios(){
    this.cargando=true;
    this.usuarioService.getUsers().subscribe((resp)=>{
      this.usuarios = resp.map((doc)=>new Usuario(doc.payload.doc.id,doc.payload.doc.data().celular,doc.payload.doc.data().correo,doc.payload.doc.data().estado,doc.payload.doc.data().nombre,doc.payload.doc.data().telefono,doc.payload.doc.data().tipoUsuario))
      this.cargando = false;
    })
  }

  borrarUsuario(usuario: any){
    Swal.fire({
      title: '¿Estás seguro de borrar al usuario ' +usuario.nombre +'?',
      text: "No podrá revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.borrarUsuario(usuario.id).then((resp)=>{
          Swal.fire(
          'Eliminado!',
          'El usuario ha sido eliminado',
          'success'
          )
        })
        
      }
    })
  }

  buscar(busqueda:string){
    this.cargando=true;
    this.usuarioService.buscar(busqueda).subscribe((resp)=>{
      this.usuarios = resp.map((doc)=>new Usuario(doc.payload.doc.id,doc.payload.doc.data().celular,doc.payload.doc.data().correo,doc.payload.doc.data().estado,doc.payload.doc.data().nombre,doc.payload.doc.data().telefono,doc.payload.doc.data().tipoUsuario))
      this.cargando = false;
    })
  }

  buscarEstatus(status:string){
    this.cargando=true;
    this.usuarioService.buscarStatus(status).subscribe((resp)=>{
      this.usuarios = resp.map((doc)=>new Usuario(doc.payload.doc.id,doc.payload.doc.data().celular,doc.payload.doc.data().correo,doc.payload.doc.data().estado,doc.payload.doc.data().nombre,doc.payload.doc.data().telefono,doc.payload.doc.data().tipoUsuario))
      this.cargando = false;
    })
  }

  getUnidades(id:string){
    this.usuarioService.getUnidadesDeUsuario(id).subscribe((resp)=>{
      this.unidades = resp.map((doc)=>{
        return Object.assign(doc.payload.doc.data(), {id: doc.payload.doc.id});
        
      })
      console.log(this.unidades);
    })
  }

  

}
