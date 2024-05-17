import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(Users.name) private usersModule: Model<UsersDocument>,
  ){}  

  create(createUserDto: CreateUserDto) {
    return this.usersModule.create(createUserDto)
  }

  async findAll() {
    console.log("Return ok");
    return await this.usersModule.find({})
  }

  async findOne(id: string) {
    return await this.usersModule.findById(id)
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.usersModule.findByIdAndUpdate(id, updateUserDto)
  }

  async remove(id: string) {
    return await this.usersModule.findByIdAndDelete(id)
  }
}
