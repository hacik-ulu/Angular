import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  imports: [FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})

// @Input() ile name değişkenini dışarıdan alıyoruz.
export class ExampleComponent {
  @Input() name: string = "";
  @Output() changeNameEvent = new EventEmitter<string>();

  // taşıma işlemi başlamış olur.
  changeName(){
    this.changeNameEvent.emit(this.name);
  }
}
