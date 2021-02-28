import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlHasher } from '../../utils/url-helpers';
import { Repository } from 'typeorm';
import { CreateUrlDto } from '../dto/url.dto';
import { Url } from '../model/url.entity';
import * as moment from 'moment-timezone';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url) private readonly urlRepo: Repository<Url>,
  ) {}
  async findAll(): Promise<Url[]> {
    return await this.urlRepo.find();
  }
  async findOne(id: number): Promise<Url> {
    const url = await this.urlRepo.findOne({ id });
    if (!url) throw new NotFoundException('Esta url não existe');
    return url;
  }

  async create(createUrlDto: CreateUrlDto): Promise<Url> {
    const { longUrl, shortenUrl } = createUrlDto;
    const expires = jwt.sign({ longUrl }, process.env.SECRET_EXPIRES_URL, {
      expiresIn: '2m',
    });

    const newUrl = this.urlRepo.create({
      longUrl: longUrl,
      shortenUrl: shortenUrl || 'Hds3',
      expires,
    });
    await this.urlRepo.save(newUrl);

    return newUrl;
  }
  async findUrl(url: string): Promise<Url> {
    return await this.urlRepo.findOne({ shortenUrl: url });
  }

  async getByShortenUrl(shortenUrl: string): Promise<Url> {
    const url = await this.urlRepo.findOne({ shortenUrl });
    if (!url) throw new NotFoundException('Esta url não existe');

    // TODO Verificar se o link ainda é valido
    // se for valido o usuario deve usar caso contrario
    // terminamos a requisição com uma informação ao usuario

    return url;
  }
}
