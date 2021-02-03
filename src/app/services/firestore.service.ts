import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

   usuarios: any[] = [];
   usuariosCollection: AngularFirestoreCollection<Usuario>;
  constructor(
    public afs: AngularFirestore,

  ) { 
    this.usuariosCollection = this.afs.collection('sucursales').doc('misol').collection<Usuario>('usuarios', ref => ref.orderBy('nombre'));
  }

   getUsers(){
      return this.usuariosCollection.stateChanges()
  }
  
  buscar(busqueda:string){
    this.usuariosCollection = this.afs.collection('sucursales').doc('misol').collection<Usuario>('usuarios', ref => ref.orderBy('nombre').startAt(busqueda).endAt(busqueda + "\uf8ff"));
    return this.usuariosCollection.stateChanges();

  }

  buscarStatus(status:string){
    this.usuariosCollection = this.afs.collection('sucursales').doc('misol').collection<Usuario>('usuarios', ref => ref.orderBy('estado').startAt(status).endAt(status + "\uf8ff"));
    return this.usuariosCollection.stateChanges();

  }

  

  getUnidadesDeUsuario(id: string){
    return this.afs.collection('sucursales').doc('misol').collection('usuarios').doc(id).collection('unidades').stateChanges()
  }
}
