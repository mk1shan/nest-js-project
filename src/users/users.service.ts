import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user-entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<User> {
    return await this.usersRepository.findOne({
      select: ["fullName", "birthday", "isActive"],
      where: { id: _id }
    });
  }

  async createUser(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async updateUser(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async deleteUser(_id: number): Promise<void> {
    await this.usersRepository.delete(_id);
  }
}
