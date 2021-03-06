import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { FirebaseApp } from '@angular/fire/firebase.app.module';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    private route: ActivatedRoute,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone 
  ) {
    this.authStatusListener()
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

   }

   currentUser = '';
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();


authStatusListener(){
  this.afAuth.onAuthStateChanged((credential)=>{
    if(credential){
      console.log(credential);
      this.authStatusSub.next(JSON.stringify(credential));
      console.log('User is logged in');
    }
    else{
      this.authStatusSub.next(null);
      console.log('User is logged out');
    }
  })
}


   // Sign in with email/password
   SignIn(email, password) {
    return  this.afAuth.setPersistence(firebase.default.auth.Auth.Persistence.SESSION).then(()=>{
      return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          //window.location.replace('citas')
           setTimeout(() => this.router.navigate(['../dashboard/'], { relativeTo: this.route }));
        });
        //this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
    })
  }

   // Returns true when user is looged in and email is verified
   get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

   // Auth logic to run auth providers
   AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

   /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  getAuthStatus(){
    console.log(this.afAuth.currentUser);
    
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}
