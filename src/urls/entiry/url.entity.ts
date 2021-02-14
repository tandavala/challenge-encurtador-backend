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

  @Column()
  expirationTimeStamp: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(
    longUrl?: string,
    shortengUrl?: string,
    expirationTimeStamp?: string,
  );
  constructor(longUrl: string, shortenUrl: string, expirationTimeStamp: string);
  constructor(longUrl: string, shortenUrl: string, expirationTimeStamp: string);
  constructor(
    longUrl?: string,
    shoternUrl?: string,
    expirationTimeStamp?: string,
  ) {
    this.longUrl = longUrl || '';
    this.shortenUrl = shoternUrl || '';
    this.expirationTimeStamp = expirationTimeStamp || '';
  }
}
