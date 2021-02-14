import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './dto/url.dto';
import { Url } from './entiry/url.entity';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url) private readonly urlRepo: Repository<Url>,
  ) {}
  async findAll(): Promise<Url[]> {
    return this.urlRepo.find();
  }
  async findOne(id: number): Promise<Url> {
    return this.urlRepo.findOneOrFail(id);
  }
  async create(createUrlDto: CreateUrlDto): Promise<Url> {
    const newUrl = this.urlRepo.create(createUrlDto);
    await this.urlRepo.save(newUrl);
    return newUrl;
  }
}
