import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedResolver } from './breed.resolver';
import { Breed, BreedSchema } from './schemas/breed.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }]),
  ],
  providers: [BreedResolver, BreedService],
})
export class BreedModule {}
