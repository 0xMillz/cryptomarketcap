import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConnections } from './database-connections';
import { Module } from '@nestjs/common';

@Module({
    imports: [...databaseConnections],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
