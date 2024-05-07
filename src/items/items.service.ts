import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Items, ItemsDocument } from './schema/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {

  constructor(
    @InjectModel(Items.name) private itemsModule: Model<ItemsDocument>,
  ) {}

  create(createItemDto: CreateItemDto) {
    return this.itemsModule.create(createItemDto);
  }

  async findAll() {
    return await this.itemsModule.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
