import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
  ) { }


  async getUsers(){
    
    const users = this.afs.firestore.collection('/Usuarios').get();
    (await users).forEach((document)=>{
      console.log(document.data());
      
    })
    
  }
}
