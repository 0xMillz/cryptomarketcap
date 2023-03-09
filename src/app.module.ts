import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true
        }),
        DatabaseModule
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}

