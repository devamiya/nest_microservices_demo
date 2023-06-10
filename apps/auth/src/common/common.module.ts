import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CommonService } from './common.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'common',
        transport: Transport.GRPC,
        options: {
          package: 'common',
          protoPath: join(__dirname, 'proto/common.proto'),
          url: '0.0.0.0:3001',
        },
      },
    ]),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
