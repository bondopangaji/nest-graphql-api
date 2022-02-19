import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BreedService } from './breed.service';
import { Breed } from './entities/breed.entity';
import { CreateBreedInput } from './dto/create-breed.input';
import { UpdateBreedInput } from './dto/update-breed.input';

@Resolver(() => Breed)
export class BreedResolver {
  constructor(private readonly breedService: BreedService) {}

  @Mutation(() => Breed)
  async createBreed(
    @Args('createBreedInput') createBreedInput: CreateBreedInput,
  ) {
    return this.breedService.create(createBreedInput);
  }

  @Query(() => [Breed], { name: 'getAllBreed' })
  async findAll() {
    return this.breedService.findAll();
  }

  @Query(() => Breed, { name: 'getBreedById' })
  async findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.breedService.findOne(_id);
  }

  @Mutation(() => Breed, { name: 'updateBreedById' })
  async updateBreed(
    @Args('updateBreedInput') updateBreedInput: UpdateBreedInput,
  ) {
    return this.breedService.update(updateBreedInput._id, updateBreedInput);
  }

  @Mutation(() => Boolean, { name: 'deleteBreedById' })
  async removeBreed(@Args('_id', { type: () => String }) _id: string) {
    this.breedService.remove(_id);
    return true;
  }
}
