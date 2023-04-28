import { Module } from '@nestjs/common';
import { BookRepository } from '../../application/repositories/book.repository';
import { ListBookRepository } from './repositories/list-book.repository';

@Module({
  providers: [
    {
      provide: BookRepository,
      useClass: ListBookRepository,
    },
  ],
  exports: [BookRepository],
})
export class ListModule {}
