import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Unidad } from '../models/unidad';
import { Usuario } from '../models/usuario';



@Injectable({
  providedIn: 'root'
}) 
export class UsuarioService {

   usuarios: any[] = [];
   usuariosCollection: AngularFirestoreCollection<Usuario>;
  constructor(
    public afs: AngularFirestore,

  ) { 
    this.usuariosCollection = this.afs.collection('sucursales').doc('misol').collection<Usuario>('usuarios', ref => ref.orderBy('nombre'));
  }

   getUsers(){
      return this.usuariosCollection.snapshotChanges()
  }
  getUsuarioId(id:string){
    return this.usuariosCollection.doc(id).get();
  }

  getUnidades(id:string){
    return this.usuariosCollection.doc(id).collection('unidades').snapshotChanges();
  }

  guardarUnidad(idUsuario:string, unidad:any){
    return this.usuariosCollection.doc(idUsuario).collection('unidades').add(unidad);
  }

  actualizarUnidad(idUduario:string,idUnidad:Unidad,unidad:any){
    return this.usuariosCollection.doc(idUduario).collection('unidades').doc(idUnidad.id).update(unidad)
  }
  borrarUnidad(idUsuario:string, idUnidad:string){
    return this.usuariosCollection.doc(idUsuario).collection('unidades').doc(idUnidad).delete();
  }

  actualizarUsuario(usuario:any){
    return this.usuariosCollection.doc(usuario.id).update({nombre:usuario.nombre,celular:usuario.celular,telefono:usuario.telefono,correo:usuario.correo})
  }

  guardarUsuario(usuario: any, unidad: any){
    return this.usuariosCollection.add(usuario).then((resp)=>{
      resp.collection('unidades').add(unidad);
    })
  }

  borrarUsuario(id:string){
    return this.usuariosCollection.doc(id).delete();

  }
  
  buscar(busqueda:string){
    this.usuariosCollection = this.afs.collection('sucursales').doc('misol').collection<Usuario>('usuarios', ref => ref.orderBy('nombre').startAt(busqueda).endAt(busqueda + "\uf8ff"));
    return this.usuariosCollection.snapshotChanges();

  }

  buscarStatus(status:string){
    this.usuariosCollection = this.afs.collection('sucursales').doc('misol').collection<Usuario>('usuarios', ref => ref.orderBy('estado').startAt(status).endAt(status + "\uf8ff"));
    return this.usuariosCollection.snapshotChanges();

  }

  

  getUnidadesDeUsuario(id: string){
    return this.afs.collection('sucursales').doc('misol').collection('usuarios').doc(id).collection('unidades').stateChanges()
  }
}
