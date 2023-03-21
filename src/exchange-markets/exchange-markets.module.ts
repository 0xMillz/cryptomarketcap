import { Module } from '@nestjs/common';
import ExchangeMarketsController from './exchange-markets.controller';
import ExchangeMarketsService from './exchange-markets.service';
import ExchangeMarket from './exchange-market.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ExchangeMarket])],
    controllers: [ExchangeMarketsController],
    providers: [ExchangeMarketsService],
})
export default class ExchangeMarketsModule {}
