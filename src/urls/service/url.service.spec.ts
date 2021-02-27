import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from '../model/url.entity';
import { UrlValidationTime } from '../shared/url-validation-time';
import { UrlsService } from './urls.service';
import * as expires from 'expires';
import { BadRequestException, ForbiddenException } from '@nestjs/common';

const longUrl = 'https://google.com/';
const shortenUrl = 'hottopics';
const expTimeStamp = '1 week';

const urlArray = [
  new Url('https://google.com/', 'hottopics'),
  new Url('https://twitter.com/', 'awesome'),
  new Url('https://facebook.com/', 'makehappen'),
];

const oneUrl = new Url(longUrl, shortenUrl);

describe('UrlService', () => {
  let service: UrlsService;
  let repo: Repository<Url>;
  const now = Date.now();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlsService,
        {
          provide: getRepositoryToken(Url),
          useValue: {
            find: jest.fn().mockResolvedValue(urlArray),
            findOne: jest.fn().mockResolvedValue(oneUrl),
            create: jest.fn().mockResolvedValue(oneUrl),
            save: jest.fn(),
            update: jest.fn().mockResolvedValue(true),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    service = module.get<UrlsService>(UrlsService);
    repo = module.get<Repository<Url>>(getRepositoryToken(Url));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of urls', async () => {
      const urls = await service.findAll();
      expect(urls).toEqual(urlArray);
    });
  });
  describe('findOne', () => {
    it('should get a single url', async () => {
      const repoSpy = await jest.spyOn(repo, 'findOne');

      expect(service.findOne(1)).resolves.toEqual(oneUrl);
      expect(repoSpy).toBeCalledWith({ id: 1 });
    });
  });
  describe('create()', () => {
    it('should successfully create a url', () => {
      const timestamp = expires.after('2 seconds');
      try {
        expect(
          service.create({
            longUrl,
            shortenUrl,
            hash: 'ewewewe',
            expires: timestamp,
          }),
        ).resolves.toEqual(oneUrl);
      } catch (e) {
        expect(e).toBeInstanceOf(ForbiddenException);
      }
    });
  });

  describe('show URL by shorten', () => {
    it('should get one url by shorten', async () => {
      //const repoSpy = await jest.spyOn(repo, 'findOne');
      expect(service.getByShortenUrl(shortenUrl)).resolves.toEqual(oneUrl);
    });
  });
});
