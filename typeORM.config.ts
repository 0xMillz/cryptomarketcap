import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import ExchangeEntity from './src/exchanges/exchange.entity';
import { CreateExchange1678395277351 } from './migrations/1678395277351-CreateExchange';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    entities: [ExchangeEntity],
    migrations: [CreateExchange1678395277351]
});