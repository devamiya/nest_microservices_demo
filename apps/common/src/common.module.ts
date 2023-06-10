import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database.module';

const defaultOptions = {
  type: 'postgres',
  host: 'postgres://jtqtddlp:3X8LpgPKbHcjaU1tm5YYBqtYoLNmzVJr@silly.db.elephantsql.com/jtqtddlp',
  port: 5432,
  username: 'jtqtddlp',
  password: '3X8LpgPKbHcjaU1tm5YYBqtYoLNmzVJr',
  database: 'jtqtddlp',
  synchronize: true,
};

@Module({
  // imports: [TypeOrmModule.forRootAsync({ imports: [typeOrmConfig] })],
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'silly.db.elephantsql.com',
    //   port: 5432,
    //   username: 'jtqtddlp',
    //   password: '3X8LpgPKbHcjaU1tm5YYBqtYoLNmzVJr',
    //   database: 'jtqtddlp',
    //   synchronize: true,
    // }),
    // DatabaseModule,
    UsersModule,
  ],
  controllers: [CommonController],
  providers: [CommonService],
})
export class CommonModule {}
