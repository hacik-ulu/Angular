import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    
  <h1>Todo App</h1>
  @if(!isUpdateWorkFormActive){
    <div>
    <label>Work</label>
    <input [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  }@else 
  {
    <div>
    <label>Update Work</label>
    <input [(ngModel)]="updateWork">
    <button (click)="update()">Update</button>
  </div>
  }


  <hr>
  <div>
    <ul>
      @for(data of todos;track data){
        <li>
          {{data}}
           <!-- isUpdateWorkFormActive aktif olmadığı durumda update/delete gözükecekler -->
          @if(!isUpdateWorkFormActive){
            <button (click)=get($index)>Update</button>
            <button (click)="delete($index)">Delete</button>
          }   
        </li>
      }  
  </ul>
  </div>

  `

})


export class AppComponent {
  work: string = "";
  updateWork: string = "";
  updateIndex: number = 0;
  todos: string[] = [];
  isUpdateWorkFormActive: boolean = false;
  // güncelleme formunun aktif olup olmadığını kontrol ediyoruz.

  save() {
    this.todos.push(this.work);
    this.work = "";
  }

  delete(index: number) {
    this.todos.splice(index, 1)
  }

  // güncelleme için 2 aşama gerekli get ve sonrasında update.
  get(index: number) {
    this.updateIndex = index; // index saklanır.
    this.updateWork = this.todos[index];
    this.isUpdateWorkFormActive = true;
  }

  update() {
    // updateIndex = güncellemek istediğimiz veri indisi.
    // updateWork = güncellemek istediğimiz verinin yerine geçecek data.
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateWorkFormActive = false;
  }
}

// isUpdateWorkFormActive başlangıçta false olarak ayarlanmış. 
// Bu, güncelleme formunun başlangıçta gizli olduğu anlamına gelir.
//
//