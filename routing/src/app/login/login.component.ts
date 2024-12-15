import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(
    private router: Router
  ){}
  
  // Direkt ana sayfaya gider
  signIn(){
    this.router.navigateByUrl("/");
  }
}