import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//MODULOS
import { AngularFireModule } from "@angular/fire";
import { PagesModule } from './pages/pages.module'; 
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CitasComponent } from './pages/citas/citas.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAfOk5FXdZ07oRjMa_QykyNoPlKk5BsdEU",
        authDomain: "misol-dl.firebaseapp.com",
        databaseURL: "https://misol-dl.firebaseio.com",
        projectId: "misol-dl",
        storageBucket: "misol-dl.appspot.com",
        messagingSenderId: "906569129046",
        appId: "1:906569129046:web:728414b3ddef6a23436ff7"
      }
    ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
