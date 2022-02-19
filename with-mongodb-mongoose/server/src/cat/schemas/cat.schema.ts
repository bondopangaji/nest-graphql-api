import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Breed } from 'src/breed/schemas/breed.schema';
import { Sex } from 'src/common/enums/sex.enum';

export type CatDocument = Cat & Document;

@ObjectType({ description: 'Cat schema' })
@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Cat {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Date)
  @Prop()
  date_of_birth: Date;

  @Field(() => Sex)
  @Prop({ enum: Sex })
  sex: Sex;

  @Field(() => Breed)
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Breed.name })
  breed: MongooseSchema.Types.ObjectId | Breed;

  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => String)
  @Prop()
  note: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
