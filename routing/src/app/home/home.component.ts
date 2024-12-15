import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private router:Router
  ){}

  // butona basınca app.component.ts'deki method()tetiklenir Router tipindeki "router"değişkeni ile
  // navigate metoduyla about'a gideriz.
  method(){
    this.router.navigate(["about"]);
    this.router.navigateByUrl("/about")
  }
}

// Parametreli kullanımda
// this.router.navigate(["about","",""]);
// this.router.navigateByUrl("/about/parametreTipi{id,vs")