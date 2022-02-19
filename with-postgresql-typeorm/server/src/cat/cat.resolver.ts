import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { Cat } from './entities/cat.entity';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';

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
  async findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.catService.findOne(_id);
  }

  @Mutation(() => Cat, { name: 'updateCatById' })
  async updateCat(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catService.update(updateCatInput._id, updateCatInput);
  }

  @Mutation(() => Boolean, { name: 'deleteCatById' })
  async removeCat(@Args('_id', { type: () => String }) _id: string) {
    this.catService.remove(_id);
    return true;
  }
}
