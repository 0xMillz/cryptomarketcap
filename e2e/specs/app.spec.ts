import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PostgreSqlContainer } from 'testcontainers';
import * as request from 'supertest';
import { environment } from '../../src/environments/environment';
import { AppModule } from '../../src/app.module';

describe('App (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const pg = await new PostgreSqlContainer('postgres:14.1')
            .withExposedPorts(5432)
            .withDatabase('cryptomarketcap')
            .withUsername('cryptomarketcapadmin')
            .withPassword('password')
            .start();

        environment.postgresPort = pg.getMappedPort(5432);

        const moduleFixture = await Test.createTestingModule({ imports: [AppModule] }).compile();

        app = moduleFixture.createNestApplication();
        app.setGlobalPrefix('api/v1');

        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should return 200 GETting /api/v1', async () => {
        const response = await request(app.getHttpServer()).get('/api/v1');
        // console.log('response', response)
        expect(response.status).toBe(200);
    });
});
