import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CommonService } from './common/common.service';

@Injectable()
export class AuthService {
  constructor(private readonly commonService: CommonService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async find(): Promise<any> {
    try {
      const result = await this.commonService.find();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}
