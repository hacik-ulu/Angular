import { Component } from '@angular/core';


// Html ile döngü çıktıları alınır.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Döngüler</h1>
  <ul>
    @for (data of todos;track data) {
      <li>
        İndex: {{$index}} || 
        İlk Kayıt mı?: {{$first}} 
        || Son Kayıt mı?: {{$last}} || 
        Veri: {{data.work + " " + data.isCompleted}}</li>
    }
  </ul>
  `
})


// Typescript ile İncele kısmında veriler gelir.
export class AppComponent {
  todos: TodoModel[] = [
    { work: "Example1", isCompleted: true },
    { work: "Example2", isCompleted: true },
    { work: "Example3", isCompleted: true },
  ]


  // save'in içerdiği tüm içerikleri çalıştırıp ekrana yazacak
  constructor() {
    this.save()
  }

  save() {

    console.log("---------- For Döngüsü ----------------")


    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    console.log("----------- Listeyi For İle Dönme --------------")

    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].work)
    }

    console.log("----------- Listeyi Foreach İle Dönme --------------")


    this.todos.forEach((val) => {
      console.log(val.work);
      console.log(val.isCompleted);
    });

    console.log("----------- Listeyi for of İle Dönme --------------")

    // async yapıları da destekler.
    // of direkt veriyi temsil eder
    for (let data of this.todos) {""
      console.log(data.work);
      console.log(data.isCompleted)
    }

    console.log("----------- Listeyi for in İle Dönme --------------")

    // in kelimesi indexi temsil eder.
    for (let index in this.todos) {
      console.log(index);
    }

  }


}

export class TodoModel {
  work: string = "";
  isCompleted: boolean = false;
}

// {{$first}} --> ilk kayıtın olduğunu belirleyip true/false döner.
