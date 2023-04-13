import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseConnections = [
    TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const username = config.get('POSTGRES_USER');
            const password = config.get('POSTGRES_PASSWORD');
            const host = config.get('POSTGRES_HOST');
            const port = config.get('POSTGRES_PORT');
            const database = config.get('POSTGRES_DB');
            const dialect = config.get('POSTGRES_DIALECT');

            console.info(`Connecting to ${database} db on ${host}:${port}`);

            return {
                username,
                password,
                database,
                host,
                port: +port,
                dialect,
                autoLoadEntities: true,
                type: 'postgres',
                entities: [],
                synchronize: false, // always run migrations for schema changes
            };
        },
    }),
];
