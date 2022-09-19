import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly dataSource: DataSource,
  ) {}
  findAll() {
    return this.dataSource.transaction((manager) => {
      const userRepository = manager.withRepository(this.userRepository);

      return userRepository.find();
    });
  }
}
