import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from "@angular/common";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: [
  ]
})
export class NuevoComponent implements OnInit {


  public usuarioForm: FormGroup;

  constructor(public location:Location,public fb: FormBuilder, public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nombre: ['',Validators.required],
      celular: [,Validators.required],
      telefono: [],
      correo: ['',Validators.email],
      marca: ['',Validators.required],
      km: [],
      ano: [, Validators.required],
      noserie: [''],
    })
  }

  guardarUsuario(){
    const usuario = {
      nombre:this.usuarioForm.value.nombre,
      celular:this.usuarioForm.value.celular, 
      telefono:this.usuarioForm.value.telefono,
      correo:this.usuarioForm.value.correo, 
      estado:'Pendiente', 
      tipoUsuario:'Cliente'
    }
    const unidad =  {
      marca:this.usuarioForm.value.marca,
      km:this.usuarioForm.value.km,
      ano:this.usuarioForm.value.ano,
      noserie:this.usuarioForm.value.noserie,
      ultimaVisita:new Date()
    };
    console.log(usuario);
    
     this.usuarioService.guardarUsuario(usuario,unidad).then((resp)=>{
       Swal.fire({title: 'Usuario guardado!', icon: 'success',showConfirmButton: false,timer: 2000})
       this.router.navigate(['dashboard/usuarios'])
     }).catch((err)=>{
      Swal.fire({title: err, icon: 'error',showConfirmButton: false,timer: 2000})
     })
  }

  volver(){
    this.location.back()
  }
  

}
