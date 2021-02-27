import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { URL } from 'url';
import { CreateUrlDto } from '../dto/url.dto';
import { Url } from '../model/url.entity';
import { UrlsService } from '../service/urls.service';

@ApiTags('urls')
@Controller('urls')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @Get()
  @ApiOperation({ summary: 'listar todas as urls' })
  @ApiResponse({
    status: 200,
    description:
      'este endpoint lista todas a urls cadastradas na base de dados',
  })
  async findAll(): Promise<Url[]> {
    return await this.urlService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'encurar' })
  @ApiResponse({
    description: 'para criar uma url encurtada, bastas usares este endpoint.',
  })
  @ApiResponse({
    status: 201,
  })
  @UsePipes(ValidationPipe)
  create(@Body() createUrlDto: CreateUrlDto): Promise<Url> {
    return this.urlService.create(createUrlDto);
  }
  @Get('/:url')
  async showUrl(
    @Param('url') shortenUrl: string,
    @Res() res: Response,
  ): Promise<void> {
    const url = await this.urlService.getByShortenUrl(shortenUrl);
    const redictUrl = new URL(url.longUrl);

    res.redirect(redictUrl.toString());
  }
}
