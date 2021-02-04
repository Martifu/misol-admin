import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from "@angular/common";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: []
})
export class ActualizarComponent implements OnInit {


  public usuarioForm: FormGroup;
  public usuario: string;
  public id:string;

  constructor(public fb: FormBuilder, public usuarioService: UsuarioService, public router: Router,private activatedRoute: ActivatedRoute, public location:Location) { }

  ngOnInit(): void {
    console.log();
    this.activatedRoute.params
        .subscribe( ({ id }) =>{ this.cargarUsuario( id ), this.id = id;} );
    this.usuarioForm = this.fb.group({
      nombre: ['',Validators.required],
      celular: [,Validators.required],
      telefono: [],
      correo: ['',Validators.email],
    })
  }

  cargarUsuario(id:string){
    this.usuarioService.getUsuarioId(id).subscribe((resp)=>{
      console.log(resp.data());
      this.usuario=resp.data().nombre;
      this.usuarioForm.setValue({ nombre:resp.data().nombre, celular:resp.data().celular,telefono:resp.data().telefono,correo:resp.data().correo });
    })
  }

  guardarUsuario(){
    const usuario = {
      id:this.id,
      nombre:this.usuarioForm.value.nombre,
      celular:this.usuarioForm.value.celular, 
      telefono:this.usuarioForm.value.telefono,
      correo:this.usuarioForm.value.correo
    }
    console.log(usuario);
    
     this.usuarioService.actualizarUsuario(usuario).then((resp)=>{
       Swal.fire({title: 'Usuario actualizado!', icon: 'success',showConfirmButton: false,timer: 2000})
       this.router.navigate(['dashboard/usuarios'])
     }).catch((err)=>{
      Swal.fire({title: err, icon: 'error',showConfirmButton: false,timer: 2000})
     })
  }


  volver(){
    this.location.back()
  }
}
