import { ObjectType, Field } from '@nestjs/graphql';
import { Sex } from '../../common/enums/sex.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Breed } from 'src/breed/entities/breed.entity';

@ObjectType({ description: 'Cat entity' })
@Entity({ name: 'cats' })
export class Cat {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: '128' })
  name: string;

  @Field(() => Date)
  @Column({ name: 'date_of_birth', type: 'timestamptz', nullable: true })
  dob: Date;

  @Field(() => String)
  @Column({ name: 'breed_id', type: 'uuid' })
  breedId: string;

  @ManyToOne(() => Breed, (breed) => breed.cats)
  @Field(() => Breed)
  breed: Breed;

  @Field(() => Sex)
  @Column({ type: 'enum', enum: Sex })
  sex: Sex;

  @Field(() => String)
  @Column({ type: 'text', nullable: true })
  description: string;

  @Field(() => String)
  @Column({ type: 'text', nullable: true })
  note: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
