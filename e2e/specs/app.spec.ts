import path from 'path';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DockerComposeEnvironment, StartedDockerComposeEnvironment, Wait } from 'testcontainers';
import request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('App (e2e)', () => {
    let environment: StartedDockerComposeEnvironment;
    let app: INestApplication;

    beforeAll(async () => {
        const composeFilePath = path.resolve(__dirname, '../../');
        const composeFile = 'docker-compose.yml';

        environment = await new DockerComposeEnvironment(composeFilePath, composeFile)
            .withWaitStrategy('postgres_1', Wait.forHealthCheck())
            .up();

        const moduleFixture = await Test.createTestingModule({ imports: [AppModule] }).compile();

        app = moduleFixture.createNestApplication();
        app.setGlobalPrefix('api/v1');

        await app.init();
    });

    afterAll(async () => {
        await app.close();
        await environment.down();
    });

    it('should return status code 200 when GETting /api/v1', async () => {
        const response = await request(app.getHttpServer()).get('/api/v1');
        expect(response.status).toBe(200);
    });

    it('should return response text "Hello Crypto!" when GETting /api/v1 body', async () => {
        const response = await request(app.getHttpServer()).get('/api/v1');
        expect(response.text).toEqual('Hello Crypto!');
    });
});
