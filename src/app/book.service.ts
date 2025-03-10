import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  data: Array<{id: number, name: string, author: string}> = [
    {id: 1, name: 'Kutya', author: 'Thomas'},
    {id: 2, name: 'Macska', author: 'Lucky'},
    {id: 3, name: 'Oldat', author: 'Browny'},
    {id: 4, name: 'Doboz', author: 'Opos'},
    {id: 5, name: 'Malac', author: 'Thenk'},
    {id: 6, name: 'Savas', author: 'Mburo'},
    {id: 7, name: 'Pereg', author: 'Bricky'},
    {id: 8, name: 'Meredek', author: 'Stony'},
    {id: 9, name: 'Enyv', author: 'Hardy'},
    {id: 10, name: 'Turis', author: 'Plummy'},
    {id: 11, name: 'Bulis', author: 'Tecky'},
    {id: 12, name: 'Caplat', author: 'Klucky'},
    {id: 13, name: 'Recseg', author: 'Thinky'},
    {id: 14, name: 'Szapul', author: 'Tumy'},
    {id: 15, name: 'Marhul', author: 'Rechy'}
  ];

  constructor() { }

  list() {
    return this.data;
  }

  delete(id) {
    const arr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id !== id) {
       // arr.push(this.data[i]);
      }
    }
    this.data = arr;
  }

  update(id, name, author) {
    this.data.map((book, index) => {
      if (book.id === id) {
        book.name = name;
        book.author = author;
        this.data[index] = book;
      }
    });
  }

  save(name, author) {
    this.data.push({
      id: this.data[this.data.length - 1].id + 1,
      name: name,
      author: author
    });
  }

}
