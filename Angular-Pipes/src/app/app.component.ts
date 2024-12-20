import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
  <h1>Pipe</h1>
  <h1>{{name | titlecase | uppercase | lowercase }}</h1>
  <h1>{{date | date:'dd.MMMM.yyy HH:mm:ss'}}</h1>
  <h1>{{num | currency : 'TRY':'symbol-narrow':'1.2-2'}}</h1>

  `
})
export class AppComponent {
  name: string = "Haçik Ulu";
  date: Date = new Date();
  num: number = 17002.25;
}
