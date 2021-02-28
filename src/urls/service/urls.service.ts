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
import * as jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import { Expires } from '../dto/expires.enum';
import { JwtDecode } from 'src/cron/interface/jwtDecode';
import * as randomstring from 'randomstring';

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
    const expireTime = await this.getExpiration(expires);

    const exp = jwt.sign({ longUrl }, process.env.SECRET_EXPIRES_URL, {
      expiresIn: expireTime,
    });

    const urlHelper = new UrlHasher(longUrl);

    const alreadyExist = await this.urlRepo.findOne({ hash: urlHelper.hash });

    if (alreadyExist) {
      throw new ForbiddenException('Esta url já sendo usada.');
    }
    const shortenLink = randomstring.generate({
      length: 6,
      charset: 'alphabetic',
    });

    const newUrl = this.urlRepo.create({
      longUrl: longUrl.toLowerCase(),
      shortenUrl: shortenUrl || shortenLink,
      hash: urlHelper.hash,
      expires: exp,
    });
    await this.urlRepo.save(newUrl);

    return newUrl;
  }
  async findUrl(url: string): Promise<Url> {
    return await this.urlRepo.findOne({ shortenUrl: url });
  }

  async getExpiration(exp: Expires) {
    let expires;
    if (exp === Expires.ONE_DAY) {
      expires = '24h';
    }
    if (exp === Expires.ONE_WEEk) {
      expires = '168h';
    }
    if (exp === Expires.ONE_MONTH) {
      expires = '744h';
    } else {
      expires = '2m';
    }
    return expires;
  }

  async getByShortenUrl(shortenUrl: string): Promise<Url> {
    const url = await this.urlRepo.findOne({ shortenUrl });
    if (!url) throw new NotFoundException('Esta url não existe');

    const decoded = jwt_decode<JwtDecode>(url.expires);
    const now = Date.now().valueOf() / 1000;

    if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
      throw new ForbiddenException('Esta url já não é válido');
    }
    return url;
  }

  async delete(id: number): Promise<void> {
    await this.urlRepo.delete(id);
  }
}
