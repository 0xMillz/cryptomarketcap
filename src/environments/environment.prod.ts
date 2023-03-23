import { OpenAPIObject } from '@nestjs/swagger';
import { IEnvironment } from './i.environment';

export const environment: IEnvironment = {
    production: true,
    postgresHost: process.env.POSTGRES_HOST,
    postgresPort: +process.env.POSTGRES_PORT,
    postgresDatabase: process.env.PSOTGRES_DB,
    postgresUsername: process.env.POSTGRES_USER,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    swaggerInitializer: () => ({} as OpenAPIObject),
};
