import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Location} from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styles: [ 
  ]
})
export class NuevaComponent implements OnInit {

  public unidadForm: FormGroup;
  idUsuario:string;

  constructor(private _location: Location,public fb: FormBuilder, public usuarioService: UsuarioService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .subscribe( ({ id }) =>{  this.idUsuario = id;} );
    this.unidadForm = this.fb.group({
      marca: ['',Validators.required],
      km: [],
      ano: [, Validators.required],
      noserie: [''],
    })
  }

  guardarUnidad(){
    const unidad =  {
      marca:this.unidadForm.value.marca,
      km:this.unidadForm.value.km,
      ano:this.unidadForm.value.ano,
      noserie:this.unidadForm.value.noserie,
      ultimaVisita: new Date()
    };
    console.log(unidad);
    
     this.usuarioService.guardarUnidad(this.idUsuario,unidad).then((resp)=>{
       Swal.fire({title: 'Unidad guardado!', icon: 'success',showConfirmButton: false,timer: 2000})
       this._location.back();
     }).catch((err)=>{
      Swal.fire({title: err, icon: 'error',showConfirmButton: false,timer: 2000})
     })
  }

  volver(){
    this._location.back()
  }

}
