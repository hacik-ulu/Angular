import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // parametrenin yakalanma kısmı.
  // ActivatedRoute ile adres çubuğundaki gelmiş olan aktif değeri yakalar ve bize sonucunu verir.
  // params ile parametre değerini güncel olarak yakalıyor olacağız.
  // res ile gönderdiğimiz parametreler array olarak gelecek bize.(Ts olarak)
  // 'params ile parametredeki değeri array olarak değil doğrudan yakalarız.'
  constructor(
    private activated: ActivatedRoute
  ) {
    this.activated.params.subscribe((res) => {
      console.log(res['params'])
    }
    )
  }
}
