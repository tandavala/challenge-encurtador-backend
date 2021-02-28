import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UrlsModule } from './urls/urls.module';
import { CronModule } from './cron/cron.module';
import { ScheduleModule } from 'nest-schedule';

@Module({
  imports: [
    ScheduleModule.register({}),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(s),
    UrlsModule,
    CronModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
