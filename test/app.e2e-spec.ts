import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('App (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('UrlModule', () => {
    beforeEach(async () => {
      const uncleard = await request(app.getHttpServer()).get('/urls');
      await Promise.all(
        uncleard.body.map(async (url) => {
          return request(app.getHttpServer()).get(`/${url.id}`);
        }),
      );
    });
  });
});
