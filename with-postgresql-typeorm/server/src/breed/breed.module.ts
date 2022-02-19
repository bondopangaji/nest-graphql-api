import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedResolver } from './breed.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Breed])],
  providers: [BreedResolver, BreedService],
})
export class BreedModule {}
