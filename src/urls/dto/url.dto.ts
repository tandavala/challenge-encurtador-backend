import { IsIn, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { Expires } from './expires.enum';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;

  @IsOptional()
  shortenUrl: string;

  @IsOptional()
  @IsIn([
    Expires.TWO_MINUTES,
    Expires.ONE_DAY,
    Expires.ONE_WEEk,
    Expires.ONE_MONTH,
  ])
  expires: Expires;
}
