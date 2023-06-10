import { DataSource } from 'typeorm';
import { Accounts } from './entities/account.entity';

export const accountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Accounts),
    inject: ['DATA_SOURCE'],
  },
];
