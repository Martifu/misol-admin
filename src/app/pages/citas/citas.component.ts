import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: [
  ]
})
export class CitasComponent implements OnInit {

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit(): void {
    
    var users = this.firestoreService.getUsers()
    
    
  }

}
