import { Body, Controller } from '@nestjs/common';
import { CreateUrlDto } from './dto/url.dto';
import { Url } from './entiry/url.entity';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  create(@Body() createUrlDto: CreateUrlDto): Promise<Url> {
    return this.urlService.create(createUrlDto);
  }
}
