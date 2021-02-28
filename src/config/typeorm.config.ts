import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: '5432',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  ssl: true,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true, // but not in production
};
