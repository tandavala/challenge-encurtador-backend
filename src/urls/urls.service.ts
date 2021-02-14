import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlHasher } from '../utils/url-helpers';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './dto/url.dto';
import { Url } from './entiry/url.entity';
import { UrlValidationTime } from './shared/url-validation-time';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url) private readonly urlRepo: Repository<Url>,
  ) {}
  async findAll(): Promise<Url[]> {
    return await this.urlRepo.find();
  }
  async findOne(id: number): Promise<Url> {
    return this.urlRepo.findOneOrFail(id);
  }
  async create(createUrlDto: CreateUrlDto): Promise<Url> {
    const { longUrl, shortenUrl } = createUrlDto;
    const hasher = new UrlHasher(longUrl);

    const newUrl = this.urlRepo.create({
      longUrl: hasher.normalizedUrl,
      shortenUrl: shortenUrl || hasher.hash,
      expirationTimeStamp: UrlValidationTime.TWO_MINUTES,
    });
    await await this.urlRepo.save(newUrl);
    return newUrl;
  }
  async getByShortenUrl(shortenUrl: string): Promise<Url> {
    return this.urlRepo.findOneOrFail({ shortenUrl });
  }
}
