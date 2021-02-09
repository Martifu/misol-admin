import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from "@angular/common";
import Swal from 'sweetalert2';
import { Unidad } from 'src/app/models/unidad';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: [
  ]
})
export class CitasComponent implements OnInit {

  usuario:string;
  public usuarioForm: FormGroup;
  public unidadForm: FormGroup;

  unidades: Unidad[]=[];

  model: NgbDateStruct;
  date: {year: number, month: number};


  constructor(private calendar: NgbCalendar, public fb: FormBuilder, public usuarioService: UsuarioService, public router: Router,private activatedRoute: ActivatedRoute, public location:Location) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe( ({ id }) =>{ this.cargarUsuario( id ), this.cargarUnidades(id)} );
        this.usuarioForm = this.fb.group({
          nombre: ['',Validators.required],
          celular: [,Validators.required],
          telefono: [],
          correo: ['',Validators.email],
        })
        this.unidadForm = this.fb.group({
          marca: ['',Validators.required],
          ano: [,Validators.required],
          noserie: [],
          km: ['',Validators.email],
        })
  }

  

  cargarUsuario(id:string){
    this.usuarioService.getUsuarioId(id).subscribe((resp)=>{
      console.log(resp.data());
      this.usuario=resp.data().nombre;
      this.usuarioForm.setValue({ nombre:resp.data().nombre, celular:resp.data().celular,telefono:resp.data().telefono,correo:resp.data().correo });
    })
  }

  cargarUnidades(id:string){
    this.usuarioService.getUnidades(id).subscribe((resp)=>{
      this.unidades = resp.map((doc)=>new Unidad(doc.payload.doc.id,doc.payload.doc.data().ano,doc.payload.doc.data().km,doc.payload.doc.data().marca,doc.payload.doc.data().noserie,doc.payload.doc.data().ultimaVisita))
      this.unidadForm.setValue({ km:this.unidades[0].km, ano:this.unidades[0].ano, marca:this.unidades[0].marca, noserie:this.unidades[0].noserie });

    })
  }

  onChangeUnidad(unidad){    
    this.unidadForm.setValue({ km:this.unidades[unidad].km, ano:this.unidades[unidad].ano, marca:this.unidades[unidad].marca, noserie:this.unidades[unidad].noserie });


  }

  guardarUsuario(){

  }

  volver(){
    this.location.back()
  }
}
