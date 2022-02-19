import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CatService } from './cat.service';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Schema as MongooseSchema } from 'mongoose';
import { Breed } from 'src/breed/schemas/breed.schema';

@Resolver(() => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Mutation(() => Cat)
  async createCat(@Args('createCatInput') createCatInput: CreateCatInput) {
    return this.catService.create(createCatInput);
  }

  @Query(() => [Cat], { name: 'getAllCat' })
  async findAll() {
    return this.catService.findAll();
  }

  @Query(() => Cat, { name: 'getCatById' })
  async findOne(
    @Args('id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.catService.findOne(_id);
  }

  @Mutation(() => Cat, { name: 'updateCatById' })
  async updateCat(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catService.update(updateCatInput._id, updateCatInput);
  }

  @Mutation(() => Cat, { name: 'deleteCatById' })
  async removeCat(
    @Args('id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.catService.remove(_id);
  }

  @ResolveField()
  async breed(@Parent() cat: CatDocument, @Args('populate') populate: boolean) {
    if (populate) await cat.populate({ path: 'breed', model: Breed.name });

    console.log(cat.breed);
    return cat.breed;
  }
}
