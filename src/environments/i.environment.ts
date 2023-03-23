import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';

export interface IEnvironment {
    production: boolean;
    postgresHost: string;
    postgresPort: number;
    postgresDatabase: string;
    postgresUsername: string;
    postgresPassword: string;
    swaggerInitializer: (app: INestApplication) => OpenAPIObject;
}
