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
  shortenUrl: string;

  constructor(longUrl?: string, shortengUrl?: string);
  constructor(longUrl: string, shortenUrl: string);
  constructor(longUrl: string, shortenUrl: string);
  constructor(longUrl?: string, shoternUrl?: string) {
    this.longUrl = longUrl || '';
    this.shortenUrl = shoternUrl || '';
    // this.expirationDate = expirationDate || undefined;
  }
}
