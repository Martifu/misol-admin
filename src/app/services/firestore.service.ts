import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

   usuarios: any[] = [];

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
  ) { }
  


   getUsers(){
      return this.afs.collection('usuarios').stateChanges();
  }

  getUnidadesDeUsuario(id: string){
    return this.afs.collection('usuarios').doc(id).collection('unidades').stateChanges()
  }
}
