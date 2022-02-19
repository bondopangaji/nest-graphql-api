import { ObjectType, Field } from '@nestjs/graphql';
import { Cat } from 'src/cat/entities/cat.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType({ description: 'Breed entity' })
@Entity({ name: 'breeds' })
export class Breed {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: '128' })
  name: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @OneToMany(() => Cat, (cat) => cat.breed)
  @Field(() => [Cat], { nullable: true })
  cats: Cat[];
}
