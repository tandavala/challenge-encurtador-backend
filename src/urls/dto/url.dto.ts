import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IS_DATE,
} from 'class-validator';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;

  @IsOptional()
  shortenUrl: string;

  @IsOptional()
  expires: string;
}
