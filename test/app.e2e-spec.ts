import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateApiDto } from '../src/api/dto/create-api.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('/ (ADD ONE)', () => {
    const dto: CreateApiDto = { name: 'tester' };
    return request(app.getHttpServer()).post('/api').send(dto).expect(201);
  });

  it('/ (GET ALL)', () => {
    return request(app.getHttpServer()).get('/api').expect(200);
  });

  it('/ (GET ONE)', () => {
    return request(app.getHttpServer()).get(`/api/${7}`).expect(200);
  });

  it('/ (UPDATE ONE)', () => {
    return request(app.getHttpServer())
      .patch(`/${2}`)
      .send({ name: 'tester' })
      .expect(404);
  });

  it('/ (DELETE ONE)', () => {
    return request(app.getHttpServer()).get(`/${4}`).expect(404);
  });
});
