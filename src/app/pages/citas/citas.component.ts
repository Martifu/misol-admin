import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: [
  ]
})
export class CitasComponent implements OnInit {
  isAuthenticated;
  constructor(public firestoreService: FirestoreService,private authservice: AuthService ) { }

  ngOnInit(): void {
    this.authservice.getAuthStatus();
    this.authservice.currentAuthStatus.subscribe(authStatus => this.isAuthenticated = authStatus)
    console.log(this.isAuthenticated);
    
    this.firestoreService.getUsers()
  }

  

}
