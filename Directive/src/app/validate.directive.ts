import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validate]',
  standalone: true
})
export class ValidateDirective {

  constructor(
    // inputa erişiyoruz.
    private el: ElementRef
  ) { }

  // Giriş alanında herhangi bir tuşa basılıp bırakıldığında keyup olayı, keyup() metodu çağırılır.
  @HostListener("keyup") keyup(){
    this.checkInputValidation(this.el.nativeElement) // inputun geçerli olup olmadığını kontrol ediyoruz.
  }

  checkInputValidation(element: any) {
    const valid = element.validity.valid; // Giriş alanının geçerli olup olmadığını kontrole eder.
    const id = element.id; // giriş alanının id değerini alır
    const divEl = document.querySelector(`#${id}+div`); // Giriş alanına bitişik olan bir <div> elemanını seçer. Bu, hata mesajlarını göstermek için kullanılır.
    if (!valid) {
      element.className = "invalid";
      divEl!.innerHTML = element.validationMessage;
    } else {
      element.className = "";
      divEl!.innerHTML = "";
    }
  }

}
