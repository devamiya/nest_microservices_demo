import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CommonGrpcServicesInterface } from './common.interface';

@Injectable()
export class CommonService {
  private commonGrpcService: CommonGrpcServicesInterface;
  constructor(@Inject('common') private commonClient: ClientGrpc) {}

  onModuleInit() {
    console.log('init');
    this.commonGrpcService =
      this.commonClient.getService<CommonGrpcServicesInterface>(
        'CommonService',
      );
  }
  async find() {
    const res = await this.commonGrpcService.find({ user: 'test' }).toPromise();
    return res;
  }
}
