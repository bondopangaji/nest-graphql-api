import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CatModule } from './cat/cat.module';
import { BreedModule } from './breed/breed.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
        numberScalarMode: 'integer',
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost' || '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'graphql-cat-api',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    CatModule,
    BreedModule,
  ],
})
export class AppModule {}
