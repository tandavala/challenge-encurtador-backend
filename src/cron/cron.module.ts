import { Module } from '@nestjs/common';
import { UrlsModule } from '../urls/urls.module';
import { CronService } from './service/cron.service';

@Module({
  imports: [UrlsModule],
  providers: [CronService],
})
export class CronModule {}
