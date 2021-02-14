import {
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

  expirationTimeStamp: string;
}
