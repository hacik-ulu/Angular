import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  // string değer verilecek, ekleme yapıldıktan sonra string değer dönecek
  // parametre almayacak
  transform(value: string, ...args: unknown[]): string {
    return "Mr. " + value;
  }

}
