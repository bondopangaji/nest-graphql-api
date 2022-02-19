import { InputType, Field } from '@nestjs/graphql';
import { Sex } from 'src/common/enums/sex.enum';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateCatInput {
  @Field(() => String)
  name: string;

  @Field(() => Date)
  date_of_birth: Date;

  @Field(() => Sex)
  sex: Sex;

  @Field(() => String)
  breed: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  description: string;

  @Field(() => String)
  note: string;
}
