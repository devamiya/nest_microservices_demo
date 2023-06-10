import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Accounts } from './entities/account.entity';
import { AccountDto, ResponseDto } from './dto/accounts.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountsRepository: Repository<Accounts>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<ResponseDto> {
    try {
      const res = await this.accountsRepository.find();
      console.log(res);
      return { accounts: res };
    } catch (e) {
      console.log(e);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
