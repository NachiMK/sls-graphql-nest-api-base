import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
//import { CreateUserInput } from '../dtos/user/create-user.input';
import { Book } from '../entities/book';
//import { CreateUserUseCase } from '../use-cases/create-user';
import { ListAllBooksUseCase } from '../use-cases/list-books';

@Resolver()
export class BooksResolver {
  constructor(
    //private readonly createUserUseCase: CreateUserUseCase,
    private readonly listAllBooksUseCase: ListAllBooksUseCase,
  ) {}

  @Query(() => [Book])
  async books() {
    return await this.listAllBooksUseCase.execute();
  }
}
