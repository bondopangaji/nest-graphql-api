import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBreedInput {
  @Field(() => String)
  name: string;
}
