// This compiled and started but didn't execute anything because of errors in resolvers not being a class
/*
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
const path = require('path');
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');

console.log(`Path: ${path.join(__dirname, './*.resolver.*')}`);
const resolversArray = loadFilesSync(path.join(__dirname, './*.resolver.*'));
console.log(`resolversArray: ${JSON.stringify(resolversArray, null, 2)}`);

export const resolvers = mergeResolvers(resolversArray)
