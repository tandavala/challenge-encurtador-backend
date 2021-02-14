import { BadRequestException, PipeTransform } from '@nestjs/common';
import { UrlValidationTime } from '../shared/url-validation-time';

export class UrlValidationPipe implements PipeTransform {
  readonly allowedValidation = [
    UrlValidationTime.TWO_MINUTES,
    UrlValidationTime.THIRTY_MINUTES,
    UrlValidationTime.ONE_DAY,
    UrlValidationTime.ONE_HOUR,
    UrlValidationTime.ONE_MONTH,
    UrlValidationTime.ONE_WEEK,
  ];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isValidExpiration(value)) {
      throw new BadRequestException(`${value} is not a valid status`);
    }
    return value;
  }
  private isValidExpiration(status: any) {
    const index = this.allowedValidation.indexOf(status);
    return index !== -1;
  }
}
