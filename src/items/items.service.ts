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

  async findOne(id: string)  {
    return await this.itemsModule.findOne({id: id});
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    return await this.itemsModule.findByIdAndUpdate(id, updateItemDto);
  }

  async remove(id: string) {
    return await this.itemsModule.findByIdAndDelete(id);
  }
}
