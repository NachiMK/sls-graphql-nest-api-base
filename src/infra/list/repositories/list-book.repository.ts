import { Injectable } from '@nestjs/common';
import { Book } from '../../../application/entities/book';
import { BookRepository } from '../../../application/repositories/book.repository';

@Injectable()
export class ListBookRepository implements BookRepository {
  constructor() {}

  async listAllBooks(): Promise<Book[]> {
    const books = new Array<Book>();
    let book = new Book({ id: '1', title: 'title-One' });
    books.push(book);
    book = new Book({ id: '2', title: 'title-Two' });
    books.push(book);
    book = new Book({ id: '3', title: 'title-Thre' });
    books.push(book);
    console.log('books: ', JSON.stringify(books, null, 2));
    return Promise.all(books);
  }
}
