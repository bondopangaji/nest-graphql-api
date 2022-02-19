import { CreateBreedInput } from './create-breed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdateBreedInput extends PartialType(CreateBreedInput) {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
}
