import { InputType, Field } from '@nestjs/graphql';
import { Sex } from 'src/common/enums/sex.enum';

@InputType()
export class CreateCatInput {
  @Field(() => String)
  name: string;

  @Field(() => Date)
  dob: Date;

  @Field(() => Sex)
  sex: Sex;

  @Field(() => String)
  breedId: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  note: string;
}
