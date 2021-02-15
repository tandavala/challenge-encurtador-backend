import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IS_DATE,
} from 'class-validator';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  longUrl: string;

  @IsOptional()
  @ApiProperty()
  shortenUrl: string;

  @IsNotEmpty()
  @ApiProperty({ enum: ['TWO_MINUTES'] })
  expires: string;

  @IsAlphanumeric()
  @ApiProperty()
  hash: string;
}
