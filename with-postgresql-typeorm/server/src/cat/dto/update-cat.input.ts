import { CreateCatInput } from './create-cat.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCatInput extends PartialType(CreateCatInput) {
  @Field(() => String)
  _id: string;
}
