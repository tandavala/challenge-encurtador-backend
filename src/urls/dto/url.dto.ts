import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsUrl,
  IS_DATE,
} from 'class-validator';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;

  @IsNotEmpty()
  shortenUrl: string;
}
