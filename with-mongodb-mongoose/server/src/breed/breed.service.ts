import { Injectable } from '@nestjs/common';
import { CreateBreedInput } from './dto/create-breed.input';
import { UpdateBreedInput } from './dto/update-breed.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Breed, BreedDocument } from './schemas/breed.schema';

@Injectable()
export class BreedService {
  constructor(
    @InjectModel(Breed.name)
    private breedModel: Model<BreedDocument>,
  ) {}

  async create(createBreedInput: CreateBreedInput) {
    const breed = new this.breedModel(createBreedInput);
    return await breed.save();
  }

  async findAll() {
    return await this.breedModel.find();
  }

  async findOne(_id: MongooseSchema.Types.ObjectId) {
    return await this.breedModel.findById(_id);
  }

  async update(
    _id: MongooseSchema.Types.ObjectId,
    updateBreedInput: UpdateBreedInput,
  ) {
    return await this.breedModel.findByIdAndUpdate(
      updateBreedInput._id,
      updateBreedInput,
      { new: true },
    );
  }

  async remove(_id: MongooseSchema.Types.ObjectId) {
    return await this.breedModel.findByIdAndDelete(_id);
  }
}
