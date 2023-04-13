import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';

beforeAll(async () => {
    console.log('3) afterEnv SETUP START');

    const moduleFixture = await Test.createTestingModule({ imports: [AppModule] }).compile();
    global.app = moduleFixture.createNestApplication();
    global.app.setGlobalPrefix('api/v1');
    await global.app.init();
    console.log('4) afterEnv SETUP DONE');
});

afterAll(async () => {
    console.log('5) afterEnv TEARDOWN START');
    await global.app.close();
    console.log('6) afterEnv TEARDOWN DONE');
});
