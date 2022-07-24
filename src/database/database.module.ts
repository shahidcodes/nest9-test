import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './models/cat.schema';

@Global()
@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService],
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
})
export class DatabaseModule {}
