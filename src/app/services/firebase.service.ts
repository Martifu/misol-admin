import { Injectable } from '@angular/core';
import { AngularFireAuth  } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  async signIn(email:string, password:string ) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(resp =>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(resp.user));
      console.log(JSON.stringify(resp.user));
      
    })
  }

  async signUp(email:string, password:string ) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(resp =>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(resp.user));
    })
  }

  logOut(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
