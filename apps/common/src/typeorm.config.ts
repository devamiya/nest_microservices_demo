import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as config from 'config';

// const dbConfig = config.get('db');

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  //RDS is Relational Database Service provided by AWS
  // It injects env variables to the db config in production mode
  // Provided to us by ellastic beanstalk

  // host: process.env.RDS_HOSTNAME || dbConfig.host,
  // port: process.env.RDS_PORT || dbConfig.port,
  // username: process.env.RDS_USERNAME || dbConfig.username,
  // password: process.env.RDS_PASSWORD || dbConfig.password,
  // database: process.env.RDS_DB_NAME || dbConfig.database,
  host: 'postgres://jtqtddlp:3X8LpgPKbHcjaU1tm5YYBqtYoLNmzVJr@silly.db.elephantsql.com/jtqtddlp',
  port: 5432,
  username: 'jtqtddlp',
  password: '3X8LpgPKbHcjaU1tm5YYBqtYoLNmzVJr',
  database: 'jtqtddlp',
  //entities: ['dist/**/*.entity{.ts,.js}'],
  //migrations: ['src/migration/**/*.ts'],
  //subscribers: ['src/subscriber/**/*.ts'],

  //true for dev mode as we constantly change schemas which gets sync with the db
  //true for the first time in prod as you wont have to set the db separately
  // toggle the synchronize value by following env variable
  //synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};

export { typeOrmConfig };
