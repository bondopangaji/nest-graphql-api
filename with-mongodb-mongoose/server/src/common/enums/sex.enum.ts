import { registerEnumType } from '@nestjs/graphql';

export enum Sex {
  MALE = 'Male',
  FEMALE = 'Female',
}

registerEnumType(Sex, {
  name: 'Sex',
  description: 'Enum to determine sex of cat or kitten',
});
