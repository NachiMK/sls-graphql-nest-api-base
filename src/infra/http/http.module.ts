import { Module } from '@nestjs/common';
import { UsersResolver } from '../../application/resolvers/users.resolver';
import { BooksResolver } from '../../application/resolvers/books.resolver';
import { CreateUserUseCase } from '../../application/use-cases/create-user';
import { ListAllUsersUseCase } from '../../application/use-cases/list-users';
import { DatabaseModule } from '../database/database.module';
import { ListModule } from '../list/list.module';
import { ListAllBooksUseCase } from '../../application/use-cases/list-books';

@Module({
  imports: [DatabaseModule, ListModule],
  providers: [UsersResolver, CreateUserUseCase, ListAllUsersUseCase, BooksResolver, ListAllBooksUseCase],
})
export class HttpModule {}
