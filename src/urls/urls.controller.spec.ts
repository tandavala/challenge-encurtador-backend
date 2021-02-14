import { Test, TestingModule } from '@nestjs/testing';
import { CreateUrlDto } from './dto/url.dto';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';

const longUrl = 'https://google.com';
const shortenUrl = 'hottopic';

describe('UrlsController', () => {
  let controller: UrlsController;
  let service: UrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlsController],
      providers: [
        {
          provide: UrlsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              { longUrl, shortenUrl },
              { longUrl: 'https://twitter.com', shortenUrl: 'awesome' },
            ]),
            findOne: jest.fn().mockImplementation((id: number) =>
              Promise.resolve({
                longUrl: longUrl,
                breed: shortenUrl,
              }),
            ),
            getByShortenUrl: jest
              .fn()
              .mockImplementation((shortenUrl: string) =>
                Promise.resolve({ longUrl, shortenUrl }),
              ),
            create: jest
              .fn()
              .mockImplementation((creaUrlDto: CreateUrlDto) =>
                Promise.resolve({ longUrl, shortenUrl }),
              ),
          },
        },
      ],
    }).compile();

    controller = module.get<UrlsController>(UrlsController);
    service = module.get<UrlsService>(UrlsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('create()', () => {
    it('should create a new url', async () => {
      const newUrl: CreateUrlDto = {
        longUrl,
        shortenUrl,
      };
      await expect(controller.create(newUrl)).resolves.toEqual({
        ...newUrl,
      });
    });
  });
});
