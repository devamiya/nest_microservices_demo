import { NestFactory } from '@nestjs/core';
import { CommonModule } from './common.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(CommonModule);
  // await app.listen(3000);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CommonModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'common',
        protoPath: join(__dirname, 'proto/common.proto'),
        url: '0.0.0.0:3001',
      },
    },
  );
  await app.listen();
}
bootstrap();
