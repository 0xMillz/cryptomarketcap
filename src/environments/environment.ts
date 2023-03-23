import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { IEnvironment } from './i.environment';

// This file can be replaced during build by using webpack plugin.
// `nest build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `webpack.config.js`.

function swaggerInitializer(app: INestApplication): OpenAPIObject {
    const config = new DocumentBuilder()
        .setTitle('CryptoMarketCap')
        .setDescription('Market data API for Crypto Exchanges')
        .setVersion('0.1')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api/v1/docs', app, document);

    return document;
}

export const environment: IEnvironment = {
    production: false,
    postgresHost: 'localhost',
    postgresPort: 5432,
    postgresDatabase: 'cryptomarketcap',
    postgresUsername: 'cryptomarketcapadmin',
    postgresPassword: 'password',
    swaggerInitializer,
};
