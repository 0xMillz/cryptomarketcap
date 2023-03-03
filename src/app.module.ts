import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'root',
            database: 'cryptomarketcap',
            entities: [],
            synchronize: false, // run local migration files instead for any table
        }),
    ],
})
export class AppModule {}
