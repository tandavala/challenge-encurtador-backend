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
import { UrlValidationTime } from '../shared/url-validation-time';
import * as Expires from 'expires';
import * as crypto from 'crypto-random-string';

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
    const { longUrl, shortenUrl, expires } = createUrlDto;
    const cryptoUrl = crypto({ length: 10, type: 'url-safe' });
    const hasher = new UrlHasher(longUrl);

    const shorten = shortenUrl || cryptoUrl;
    const timestamp = Expires.after(
      expires === 'ONE_WEEK'
        ? UrlValidationTime.ONE_WEEK
        : UrlValidationTime.TWO_MINUTES,
    );

    const alreadyExist = await this.urlRepo.findOne({ hash: hasher.hash });

    /**if (alreadyExist)
      throw new ForbiddenException('Esta url já está sendo usada'); */

    const newUrl = this.urlRepo.create({
      longUrl: hasher.normalizedUrl.toLowerCase(),
      shortenUrl: shorten,
      hash: hasher.hash,
      expires: timestamp,
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
