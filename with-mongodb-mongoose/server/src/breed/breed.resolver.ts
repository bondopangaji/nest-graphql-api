import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BreedService } from './breed.service';
import { Breed } from './schemas/breed.schema';
import { CreateBreedInput } from './dto/create-breed.input';
import { UpdateBreedInput } from './dto/update-breed.input';
import { Schema as MongooseSchema } from 'mongoose';

@Resolver(() => Breed)
export class BreedResolver {
  constructor(private readonly breedService: BreedService) {}

  @Mutation(() => Breed)
  async createBreed(@Args('createBreedInput') createBreedInput: CreateBreedInput) {
    return this.breedService.create(createBreedInput);
  }

  @Query(() => [Breed], { name: 'getAllBreed' })
  async findAll() {
    return this.breedService.findAll();
  }

  @Query(() => Breed, { name: 'getBreedById' })
  async findOne(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.breedService.findOne(_id);
  }

  @Mutation(() => Breed, { name: 'updateBreedById' })
  async updateBreed(@Args('updateBreedInput') updateBreedInput: UpdateBreedInput) {
    return this.breedService.update(updateBreedInput._id, updateBreedInput);
  }

  @Mutation(() => Breed, { name: 'deleteBreedById' })
  async removeBreed(
    @Args('id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.breedService.remove(_id);
  }
}
