import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  // string tipinde bir array yollanacak,bunu işlemek için parametre olarak bir değer gönderilicek, 
  // ve string olarak sonuc verilicek.
  transform(value: string[], search: string): string[] {
    if (!search) return value.map((val => "My " + val)); // parametre boş ise map ile bana geri verecek.

    // parametre boş değilse filter ile include edip bana geri verecek.
    return value.filter(p => p.includes(search)).map((val => "My " + val));
  }

}
