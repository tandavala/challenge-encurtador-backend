import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './model/url.entity';
import { UrlsService } from './service/urls.service';
import { UrlsController } from './controller/urls.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  providers: [UrlsService],
  controllers: [UrlsController],
  exports: [UrlsService],
})
export class UrlsModule {}
