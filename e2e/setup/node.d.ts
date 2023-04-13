import { StartedTestContainer } from 'testcontainers';
import { DataSource } from 'typeorm';
import { INestApplication } from '@nestjs/common';

// Ensure file is treated as a module
export {};

declare global {
    namespace NodeJS {
        interface Global {
            testDataSource: DataSource;
            testPgContainer: StartedTestContainer;
            app: INestApplication;
        }
    }
}
