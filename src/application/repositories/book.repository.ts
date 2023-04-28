import { Book } from '../entities/book';

export abstract class BookRepository {
  //abstract findById(bookId: String): Promise<Book | null>;
  abstract listAllBooks(): Promise<Book[]>;
}
