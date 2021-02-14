import { IsNotEmpty } from 'class-validator';

export class UrlSearcDto {
  @IsNotEmpty()
  shortUrl: string;
}
