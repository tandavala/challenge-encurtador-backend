import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { Expires } from './expires.enum';

export class CreateUrlDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  shortenUrl: string;

  @ApiProperty({
    required: false,
    enum: [
      Expires.TWO_MINUTES,
      Expires.ONE_DAY,
      Expires.ONE_WEEk,
      Expires.ONE_MONTH,
    ],
  })
  @IsOptional()
  @IsIn([
    Expires.TWO_MINUTES,
    Expires.ONE_DAY,
    Expires.ONE_WEEk,
    Expires.ONE_MONTH,
  ])
  expires: Expires;
}
