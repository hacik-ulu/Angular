import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  template: `
 <!-- route yapısında tam olarak ne nerede olarak göstermemiz için html kısmına yazmalıyız. -->
 <router-outlet></router-outlet> 
 `
})
export class AppComponent {

}
