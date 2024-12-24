import { Component } from '@angular/core';
import { ExampleComponent } from "./example/example.component";

@Component({
  selector: 'app-root',
  template: `
  <h1>State Input and Output</h1>
  <p> Benim Adım <strong>{{name}}</strong></p>
  <hr>
  <app-example [name]='name' (changeNameEvent)="changeName($event)"></app-example>
  `,
  imports: [ExampleComponent]
})
export class AppComponent {
  name: string = "Haçik";

  changeName(event: string){
    this.name = event;
  }
}

// <app-example name='Örnek'></app-example>
// Buradaki <app-example> etiketi içinde geçen example kısmı,
// Angular'da bir component adıdır. 