import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Like, Repository } from 'typeorm';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll(findUserDto: FindUserDto) {
    const { offset=0, limit=10, keyword='' } = findUserDto;
    let queryBuilder = this.usersRepository.createQueryBuilder('user');
    if (keyword) {
      queryBuilder = queryBuilder.where('user.name LIKE :keyword', { keyword: `%${keyword}%` });
    }

    // add condition to return only active users
    queryBuilder = queryBuilder.andWhere('user.deletedAt IS NULL');

    return queryBuilder
      .skip(offset)
      .take(limit)
      .getMany();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy(
      { id },
    )
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.usersRepository.findOneBy(
      { id },
    )
    user = Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    let user = await this.usersRepository.findOneBy(
      { id },
    )
    user.deletedAt = new Date();
    return this.usersRepository.save(user);
  }
}
