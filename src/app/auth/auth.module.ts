import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
  ],
  
})
export class AuthModule { }
