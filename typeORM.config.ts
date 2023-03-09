import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import ExchangeEntity from './src/exchanges/exchange.entity';
import { CreateExchanges1678402403641 } from './src/database/migrations/1678402403641-CreateExchanges';
import { SeedKrakenExchange1678403176953 } from './src/database/migrations/1678403176953-SeedKrakenExchange';

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
    migrations: [CreateExchanges1678402403641, SeedKrakenExchange1678403176953],
    synchronize: false
});
