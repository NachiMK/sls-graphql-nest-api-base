import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class ListAllBooksUseCase {
  constructor(private bookRepository: BookRepository) {}

  public async execute(): Promise<Book[]> {
    const books = await this.bookRepository.listAllBooks();
    console.log('books: ', JSON.stringify(books, null, 2));
    return books;
  }
}
