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
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { URL } from 'url';
import { CreateUrlDto } from '../dto/url.dto';
import { Url } from '../model/url.entity';
import { UrlsService } from '../service/urls.service';

@ApiTags('urls')
@Controller('urls')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @ApiOkResponse({
    description: 'Returna a lista das urls salvas na base de dados',
    type: Url,
  })
  @Get()
  async findAll(): Promise<Url[]> {
    return await this.urlService.findAll();
  }
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUrlDto: CreateUrlDto): Promise<Url> {
    return this.urlService.create(createUrlDto);
  }
  @ApiOkResponse({
    description:
      'Retorna a url encurtada e redericiona o usuário para o url original',
    status: 302,
  })
  @ApiForbiddenResponse({
    description: 'Esta url já não é válida',
    status: 403,
  })
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
