import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name)
    private catModel: Model<CatDocument>,
  ) {}

  async create(createCatInput: CreateCatInput) {
    const cat = new this.catModel(createCatInput);
    return await cat.save();
  }

  async findAll() {
    return await this.catModel.find();
  }

  async findOne(_id: MongooseSchema.Types.ObjectId) {
    return await this.catModel.findById(_id);
  }

  async update(
    _id: MongooseSchema.Types.ObjectId,
    updateCatInput: UpdateCatInput,
  ) {
    return await this.catModel.findByIdAndUpdate(
      updateCatInput._id,
      updateCatInput,
      {
        new: true,
      },
    );
  }

  async remove(_id: MongooseSchema.Types.ObjectId) {
    return await this.catModel.findByIdAndDelete(_id);
  }
}
