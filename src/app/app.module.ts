import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CitasComponent } from './pages/citas/citas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    CitasComponent
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
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
