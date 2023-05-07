//import path from 'path'
import { mergeResolvers } from '@graphql-tools/merge'
const bookResolver = require('./books.resolver');
const userResolver = require('./users.resolver');

// module.exports = mergeResolvers(resolversArray)
export const resolvers = mergeResolvers([bookResolver, userResolver]);

/*
This also throws same error as load.ts
✖ Unhandled exception in handler 'graph'.
✖ Error: "BooksResolver" defined in resolvers, but has invalid value "class BooksResolver {
      listAllBooksUseCase;
      constructor(listAllBooksUseCase) {
          this.listAllBooksUseCase = listAllBooksUseCase;
      }
      async books() {
          return await this.listAllBooksUseCase.execute();
      }
  }". The resolver's value must be of type object.
*/