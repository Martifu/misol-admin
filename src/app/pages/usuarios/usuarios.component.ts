import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];
  unidades: any[] = [];
  constructor(public firestoreService: FirestoreService) {
   }

  ngOnInit(): void {

    this.firestoreService.getUsers().subscribe((resp)=>{
      this.usuarios = resp.map((doc)=>{
       return Object.assign(doc.payload.doc.data(), {id: doc.payload.doc.id});
        
      })
    })
    
    console.log(this.usuarios);
    
   
  }


  getUnidades(id:string){
    this.firestoreService.getUnidadesDeUsuario(id).subscribe((resp)=>{
      this.unidades = resp.map((doc)=>{
        return Object.assign(doc.payload.doc.data(), {id: doc.payload.doc.id});
        
      })
    })
  }

  

}
