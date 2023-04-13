import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import migrations from './src/database/migrations';
import entities from './src/database/entities';

config();

const configService = new ConfigService();

export const dataSourceOptions = {
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    entities,
    migrations,
    synchronize: false,
    driver: require('pg'),
};
// @ts-ignore
export default new DataSource(dataSourceOptions);
