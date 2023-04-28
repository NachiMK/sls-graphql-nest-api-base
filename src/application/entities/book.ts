import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  constructor(partial: Partial<Book>) {
    Object.assign(this, partial);
  }

  @Field(() => ID)
  id?: string;

  @Field()
  title: string;
}
