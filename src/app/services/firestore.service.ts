import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
  ) { }


  async getUsers(){
    const users = this.afs.firestore.collection('/Usuarios').get();
    
    
  }
}
