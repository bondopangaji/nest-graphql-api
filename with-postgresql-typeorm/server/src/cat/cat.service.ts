import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  async create(createCatInput: CreateCatInput) {
    const cat: Cat = this.catRepository.create(createCatInput);
    return await this.catRepository.save(cat);
  }

  async findAll() {
    return await this.catRepository.find({ relations: ['breed'] });
  }

  async findOne(_id: string) {
    return await this.catRepository.findOne(_id, { relations: ['breed'] });
  }

  async update(_id: string, updateCatInput: UpdateCatInput) {
    const cat: Cat = this.catRepository.create(updateCatInput);
    updateCatInput._id = _id;
    return await this.catRepository.save(cat);
  }

  async remove(_id: string) {
    return await this.catRepository.delete(_id);
  }
}
