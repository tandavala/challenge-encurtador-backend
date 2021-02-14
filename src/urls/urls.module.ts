import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './entiry/url.entity';
import { UrlsService } from './urls.service';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  providers: [UrlsService],
})
export class UrlsModule {}
