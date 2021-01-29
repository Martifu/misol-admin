import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {



  constructor( public authService: AuthService,public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  ) {
     }
     
    ngOnInit(): void {
      this.authStatusListener()
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
        this.router.navigate(['/dashboard'])
      }
      else{
        this.authStatusSub.next(null);
        console.log('User is logged out');
      }
    })
  }



  

}
