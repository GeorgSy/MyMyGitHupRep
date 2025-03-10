import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book',
  template: `
    <div class="book-box">
      <div *ngIf="!editable" style="display: inline">
        <span style="width: 200px;display: inline-block">{{ book.name }}</span>
        -
        <span style="width: 150px;display: inline-block">{{ book.author }}</span>
      </div>
      <div *ngIf="editable" style="display: inline">
        <input type="text" [ngStyle]="{width: '150px'}" [(ngModel)]="nameInput" />
        -
        <input type="text" [(ngModel)]="authorInput" />
      </div>
      <div style="display: inline;" [ngClass]="{isDisplay: editable}">
        <button (click)="editBook($event)">Editmakra</button>
        <button (click)="deleteBook.emit({id: book.id})">Delara</button>
      </div>
      <div style="display: inline;" [ngClass]="{isDisplay: !editable}">
        <button (click)="saveBook()">Savirnya</button>
        <!--button (click)="cancleEdit($event)">Princs</button-->
      </div>
    </div>
  `,
  styles: [`
    .isBorderd {border: none}
    .book-box {
      border-bottom: 1px solid black;
      width: 600px;
      text-align: center;
      margin: auto;
    }
    .isDisplay {
      visibility: hidden;
    }
  `]
})
export class BookComponent implements OnInit {
  editable: boolean = false;
  nameInput!: string;
  authorInput!: string;

  @Input() book: any;

  @Output() deleteBook = new EventEmitter<{id: number}>();

  @Output() saveBookEmitter = new EventEmitter<{id: number, name: string, author: string}>();

  constructor() { }

  ngOnInit() {
    this.editable = false;
  }

  saveBook() {
    this.editable = false;
    this.saveBookEmitter.emit({id: this.book.id, name: this.nameInput, author: this.authorInput});
  }

  editBook(e) {
    this.nameInput = this.book.name;
    this.authorInput = this.book.author;
    this.editable = true;
  }

  cancleEdit() {
    this.editable = false;
  }

}
