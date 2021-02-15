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
  @ApiProperty({ required: false })
  shortenUrl: string;

  @IsNotEmpty()
  @ApiProperty({ required: false })
  expires: string;

  @IsAlphanumeric()
  hash: string;
}
