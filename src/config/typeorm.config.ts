import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: process.env.RDS_HOSTNAME,
  port: 5432,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true, // but not in production
};
