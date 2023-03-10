import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import * as Joi from '@hapi/joi';
import ExchangesModule from './exchanges/exchanges.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_PORT: Joi.number().required(),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_PASSWORD: Joi.string().required(),
                POSTGRES_DIALECT: Joi.string().required(),
                POSTGRES_DB: Joi.string().required(),
                NODE_ENV: Joi.string().required(),
            }),
        }),
        DatabaseModule,
        ExchangesModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
