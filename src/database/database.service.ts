import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './models/cat.schema';

@Injectable()
export class DatabaseService {
  @Inject(Cat.name)
  catModel: Model<CatDocument>;
}
