import { Injectable } from '@nestjs/common';
import { Interval, NestSchedule } from 'nest-schedule';
import { UrlsService } from '../../urls/service/urls.service';
import * as moment from 'moment-timezone';

@Injectable()
export class CronService extends NestSchedule {
  constructor(private urlService: UrlsService) {
    super();
  }
  @Interval(30000, { key: 'schedule-interval' })
  async interval(): Promise<void> {
    // const urls = await this.urlService.findAll();
    //  console.log(urls);

    const exp = moment().add(2, 'minutes').unix();
    console.log(exp);

    console.log('executing interval job');
  }
}
