import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Url {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  longUrl: string;

  @ApiProperty()
  @Column()
  hash: string;

  @ApiProperty()
  @Column()
  shortenUrl: string;

  @ApiProperty()
  @Column()
  expires: string;

  constructor(
    longUrl?: string,
    hash?: string,
    shortengUrl?: string,
    expires?: string,
  );
  constructor(longUrl: string, shortenUrl: string, expires: string);
  constructor(
    longUrl: string,
    hash: string,
    shortenUrl: string,
    expires: string,
  );
  constructor(
    longUrl?: string,
    hash?: string,
    shoternUrl?: string,
    expires?: string,
  ) {
    this.longUrl = longUrl || '';
    this.shortenUrl = shoternUrl || '';
    this.expires = expires || '';
    this.hash = hash || '';
  }
}
