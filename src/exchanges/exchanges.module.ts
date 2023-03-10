import { Module } from '@nestjs/common';
import ExchangesController from './exchanges.controller';
import ExchangesService from './exchanges.service';
import Exchange from './exchange.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Exchange])],
    controllers: [ExchangesController],
    providers: [ExchangesService],
})
export default class ExchangesModule {}
