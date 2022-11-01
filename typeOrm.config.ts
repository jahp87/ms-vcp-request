import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { ProviderEntity } from './src/providers/entities/provider.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'jahp',
  database: 'dbvcp',
  entities: [ProviderEntity],
  synchronize: true,
  migrations: ['./migrations/*.ts'],
});
