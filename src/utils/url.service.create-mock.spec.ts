import { Test } from '@nestjs/testing';
import { createMock } from '@golevelup/nestjs-testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Url } from '../urls/model/url.entity';
import { UrlsService } from '../urls/service/urls.service';
import { Repository } from 'typeorm';
import * as expires from 'expires';

describe('UrlService using createMock with DI', () => {
  let repo: Repository<Url>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UrlsService,
        {
          provide: getRepositoryToken(Url),
          useValue: createMock<Repository<Url>>(),
        },
      ],
    }).compile();

    repo = module.get<Repository<Url>>(getRepositoryToken(Url));
  });
  describe('Test Mock', () => {
    it('should have the repo mocked', () => {
      expect(typeof repo.find).toBe('function');
    });
  });

  describe('UrlService using createMock without DI', () => {
    const repo = createMock<Repository<Url>>();
    beforeEach(async () => {
      await Test.createTestingModule({
        providers: [
          UrlsService,
          { provide: getRepositoryToken(Url), useValue: repo },
        ],
      }).compile();
    });
    /**
     * it('should have the repo mocked', async () => {
      const url = {
        id: 1,
        longUrl: 'https://google.com',
        shortenUrl: 'hottopic',
        expires: expires.after('2 seconds'),
      };
      //repo.find.mockResolvedValue([url]);
      expect(await repo.find()).toEqual([url]);
    });
     */
  });
});
