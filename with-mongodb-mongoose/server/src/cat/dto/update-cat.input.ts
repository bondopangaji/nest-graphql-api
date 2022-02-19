import { CreateCatInput } from './create-cat.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdateCatInput extends PartialType(CreateCatInput) {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
}
