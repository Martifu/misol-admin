import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unidad } from 'src/app/models/unidad';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from "@angular/common";
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styles: [
  ]
})
export class UnidadesComponent implements OnInit {

  unidades: Unidad[] = [];
  cargando: boolean = true;
  idUsuario:string;

  unidadSelec: Unidad;
  
  public unidadForm: FormGroup;
  constructor(public usuarioService: UsuarioService, public activatedRoute: ActivatedRoute, public location:Location, public fb: FormBuilder) {
   }

   

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe( ({ id }) =>{ this.cargarUnidades(id)
          , this.idUsuario = id;} );

          this.unidadForm = this.fb.group({
            marca: ['',Validators.required],
            km: [],
            ano: [, Validators.required],
            noserie: [''],
          })
     
  }

 

  cargarUnidades(id:string){
    this.cargando=true;
    this.usuarioService.getUnidades(id).subscribe((resp)=>{
      this.unidades = resp.map((doc)=>new Unidad(doc.payload.doc.id,doc.payload.doc.data().ano,doc.payload.doc.data().km,doc.payload.doc.data().marca,doc.payload.doc.data().noserie,doc.payload.doc.data().ultimaVisita))
      this.cargando = false;
      console.log(this.unidades);
    })
  }


  cargarUnidad(unidad:Unidad){
    this.unidadSelec=unidad;
    this.unidadForm.setValue({km:unidad.km, marca:unidad.marca, ano:unidad.ano,noserie:unidad.noserie})
  }
  
  borrarUnidad(unidad: any){
    Swal.fire({
      title: '¿Estás seguro de borrar la unidad ' +unidad.marca +'?',
      text: "No podrá revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.borrarUnidad(this.idUsuario,unidad.id).then((resp)=>{
          Swal.fire(
          'Eliminada!',
          'La unidad ha sido eliminada',
          'success'
          )
        })
        
      }
    })
  }

  actualizarUnidad(){
    const unidad =  {
      marca:this.unidadForm.value.marca,
      km:this.unidadForm.value.km,
      ano:this.unidadForm.value.ano,
      noserie:this.unidadForm.value.noserie,
    };
    console.log(unidad);
    
     this.usuarioService.actualizarUnidad(this.idUsuario,this.unidadSelec, unidad).then((resp)=>{
       Swal.fire({title: 'Unidad actualizada!', icon: 'success',showConfirmButton: false,timer: 2000})
     }).catch((err)=>{
      Swal.fire({title: err, icon: 'error',showConfirmButton: false,timer: 2000})
     })
  }

  


 volver(){
   this.location.back()
 }

  

}
