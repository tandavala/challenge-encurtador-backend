import { TypeOrmModule } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '1cristo2bom3',
  database: 'encurtador',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true, // but not in production
};
