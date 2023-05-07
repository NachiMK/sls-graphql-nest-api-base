import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from '../entities/book';
import { ListAllBooksUseCase } from '../use-cases/list-books';

@Resolver(() => Book)
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
