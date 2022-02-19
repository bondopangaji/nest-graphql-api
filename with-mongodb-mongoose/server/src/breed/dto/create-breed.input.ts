import { InputType, Int, Field } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateBreedInput {
  @Field(() => String)
  name: string;
}
