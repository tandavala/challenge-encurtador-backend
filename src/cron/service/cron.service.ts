import { Injectable } from '@nestjs/common';
import { Interval, NestSchedule } from 'nest-schedule';
import { UrlsService } from '../../urls/service/urls.service';
import * as jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';

import { JwtDecode } from '../interface/jwtDecode';

@Injectable()
export class CronService extends NestSchedule {
  constructor(private urlService: UrlsService) {
    super();
  }
  @Interval(80000, { key: 'schedule-interval' })
  async interval(): Promise<void> {
    const urls = await this.urlService.findAll();
    urls.forEach((url) => {
      if (url.expires !== null) {
        const decoded = jwt_decode<JwtDecode>(url.expires);
        const now = Date.now().valueOf() / 1000;

        if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
          console.log(`ja axpirou ${decoded.longUrl}`);
        }
      }
    });
  }
}
