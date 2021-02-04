import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pendiente } from '../models/pendiente';

@Injectable({
  providedIn: 'root'
})
export class PendienteService {

  pendientes: any[] = [];
  pendientesCollection: AngularFirestoreCollection<Pendiente>;

  constructor(public afs: AngularFirestore,
    ) { 
      this.pendientesCollection = this.afs.collection('sucursales').doc('misol').collection<Pendiente>('citas', ref => ref.orderBy('fechaVisita'));
    }

  getPendientes()
  {
    return this.pendientesCollection.snapshotChanges()

  }
}
