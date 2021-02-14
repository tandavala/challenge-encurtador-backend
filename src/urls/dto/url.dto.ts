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
  longUrl: string;

  @IsOptional()
  shortenUrl: string;

  @IsNotEmpty()
  expires: string;

  @IsAlphanumeric()
  hash: string;
}
