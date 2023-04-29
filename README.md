
## Description
This is an attempt to create a sample project that has following capabilities.

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- [GraphQL](https://github.com/graphql) Graphql for APIs.
- [Serverless](https://www.serverless.com/) for deployment to AWS.
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).
- [Prisma](https://www.prisma.io/) for ORM.
- [Jest](https://jestjs.io/) for testing.
- [Environment Variables] - using dotenv.

## Installation

This was built using Node 18.x, Serverles framework 3.0. So please make sure you have those setup.

```bash
npm install
```

## Running the app

### DB Setup
```bash
# use docker to host postgres, make sure you dont have port 5432 already taken
# the below command uses postgres alphine (15.2)
docker compose up
```

```SQL
CREATE DATABASE apibase;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

### Env file setup
Create a .env file and add a DATABASE_URL variable and set it to postgres database.

```txt
DATABASE_URL=postgresql://your_user_name:your_password@hostname:5432/apibase
NODE_ENV=DEV
IS_OFFLINE=TRUE
```

Make sure you run primsa migrations to create tables/populate the tables. You have to manually create the database. No script included for it.

```bash
# run npx generate
npx prisma generate
```

### Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# SLS local mode
$ npm run start:offline:dev

```

## Serverless deploy
Create a default AWS profile. Make sure you set your region in profile and match it to to serverless.yml file.

This repo reads environment variables from AWS Parameter Store. So it requires to use default profile. There is a bug in SLS reading parameter store using other profiles.

If you don't want to read from ssm then remove it from serverless.yml file.

SLS requires good amount of permissions to deploy depending upon what AWS features you are using. 

Here is a blog on what permissions you might need. https://serverlessfirst.com/create-iam-deployer-roles-serverless-app/

### deploy
```bash
npm run deploy:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Testing from your browser
After starting SLS locally go to  http://localhost:3001/dev/graphql and test GraphQL calls.

```gql
query
{
  books
  {
    id
    title
  }
}# Write your query or mutation here
```

## GraphQL Schema changes
This project uses GraphQL Code first approach. All the schema is defined in schema.gql file.

Edit the file to add new types, queries, or mutations. Implement those in proper handlers and try it.

## Not working
Some things are not working.

- I used paths in ts.config to see if I can reference using names as described in ts.config but that didn't work.
- Using Apollo server / gateway.
- Schema first graphql approach.

## Credits

- Original Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Git repo - (https://github.com/jeffersondossantosaguiar/graphql-base-api/tree/main)

## Clean Architecture Notes
clean architecture link:

GraphQL Schema -> Type for callers of API to use
GraphQL Resolvers -> Query/Mutations
	- These resolvers (BooksResolver - src/application/resolvers/books.resolver.ts) uses the UseCases to fulfill a resolver request
	- Use cases (ListAllBooksUseCase is used by GraphQL Query Book Resolver) , UseCase uses BookRepository Interface in src/application/resolvers/books.resolver.ts to fulfill the use case need.
		- Use case only interacts with a Repository (aka. Interface) it doesn’t know the actual implementer.
	- Use Case and Resolvers are linked together in the HTTP Module and loaded into App start.
		- Also Use case receives the implementer in its constructor at run time on the app start. In our case it is the ListModule 
	    - List Module (src/infra/list/list.module.ts)
		    - This module basically puts the interface (src/application/repositories/book.repository.ts) and implementer together (src/infra/list/repositories/list-book.repository.ts)
		    - Implementer might use database or actually Rest API to do further actions.
	- Entities are just common form on how the data is passed around between various layers.
	- DTOs are used for clients to pass input parameters or received some return values.