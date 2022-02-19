import { CreateBreedInput } from './create-breed.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBreedInput extends PartialType(CreateBreedInput) {
  @Field(() => String)
  _id: string;
}
