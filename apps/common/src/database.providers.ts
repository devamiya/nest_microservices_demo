import { DataSource } from 'typeorm';
import { Accounts } from './users/entities/account.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'silly.db.elephantsql.com',
        port: 5432,
        username: 'jtqtddlp',
        password: '3X8LpgPKbHcjaU1tm5YYBqtYoLNmzVJr',
        database: 'jtqtddlp',
        // synchronize: true,
        entities: [Accounts],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
