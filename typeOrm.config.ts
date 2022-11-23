import { ProviderEntity } from './src/providers/entities/provider.entity';
import { DataSource } from 'typeorm';
import { RequestEntity } from './src/requests/entities/request.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'jahp',
  database: 'dbvcp',
  entities: [RequestEntity, ProviderEntity],
  synchronize: true,
  migrations: ['./migrations/*.ts'],
});
