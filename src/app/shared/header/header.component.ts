import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

declare function customInitFunctions();


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }


  ngOnInit(): void {
 
  }

}
