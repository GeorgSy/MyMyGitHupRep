import {Component, Inject, OnInit} from '@angular/core';
import {BookService} from './book.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="book-app">
      <div style="text-align: center">
        <span>Pomogács：</span><input [ngClass]="{inputValid: !nameInputValid}" style="width: 150px;" #nameInput type="text"/>
        -
        <span>Durebács：</span><input [ngClass]="{inputValid: !authorInputValid}" #authorInput type="text"/>
        <button (click)="onAdd(nameInput.value, authorInput.value)">Tipra</button>
      </div>
      <hr>
      <app-book *ngFor="let book of this.bookService.list();" [book]="book" (deleteBook)="onDelete($event.id)"
                (saveBookEmitter)="onSave($event.id, $event.name, $event.author)"></app-book>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  styles: [`
    .inputValid { border-color: red }
  `]
})
export class AppComponent implements OnInit {

  title = 'book store';

  nameInputValid: boolean = true;
  authorInputValid: boolean = true;

  constructor(@Inject(BookService) public bookService) {}

  ngOnInit() {
  }

  onDelete(id: any) {
    this.bookService.delete(id);
  }

  onSave(id: any, name: any, author: any) {
    this.bookService.update(id, name, author);
  }

  onAdd(name: any, author: any) {
    this.nameInputValid = true;
    this.authorInputValid = true;
    if(name && author) {
      this.bookService.save(name, author);
    }else{
      if(!name) {
        this.nameInputValid = false;
      }
      if(!author){
        this.authorInputValid = false;
      }
    }
  }
}
