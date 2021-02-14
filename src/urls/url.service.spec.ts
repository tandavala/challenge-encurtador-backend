import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './entiry/url.entity';
import { UrlsService } from './urls.service';

const longUrl = 'https://google.com';
const shortenUrl = 'hottopics';

const urlArray = [
  new Url('https://google.com', 'hottopics'),
  new Url('https://twitter.com', 'awesome'),
  new Url('https://facebook.com', 'makehappen'),
];

const oneUrl = new Url(longUrl, shortenUrl);

describe('UrlService', () => {
  let service: UrlsService;
  let repo: Repository<Url>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlsService,
        {
          provide: getRepositoryToken(Url),
          useValue: {
            find: jest.fn().mockResolvedValue(urlArray),
            findOneOrFail: jest.fn().mockResolvedValue(oneUrl),
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
      const repoSpy = await jest.spyOn(repo, 'findOneOrFail');

      expect(service.findOne(1)).resolves.toEqual(oneUrl);
      expect(repoSpy).toBeCalledWith(1);
    });
  });
});
