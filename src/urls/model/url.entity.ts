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
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  longUrl: string;

  @Column()
  hash: string;

  @Column()
  shortenUrl: string;

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
