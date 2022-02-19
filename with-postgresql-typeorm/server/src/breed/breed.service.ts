import { Injectable } from '@nestjs/common';
import { CreateBreedInput } from './dto/create-breed.input';
import { UpdateBreedInput } from './dto/update-breed.input';
import { Breed } from './entities/breed.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed)
    private breedRepository: Repository<Breed>,
  ) {}

  async create(createBreedInput: CreateBreedInput) {
    const breed: Breed = this.breedRepository.create(createBreedInput);
    return await this.breedRepository.save(breed);
  }

  async findAll() {
    return await this.breedRepository.find({
      relations: ['cats'],
    });
  }

  async findOne(_id: string) {
    return await this.breedRepository.findOne(_id, {
      relations: ['cats'],
    });
  }

  async update(_id: string, updateBreedInput: UpdateBreedInput) {
    const breed: Breed = this.breedRepository.create(updateBreedInput);
    updateBreedInput._id = _id;
    return await this.breedRepository.save(breed);
  }

  async remove(_id: string) {
    return await this.breedRepository.delete(_id);
  }
}
