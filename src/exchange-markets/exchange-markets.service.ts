import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import ExchangeMarket, { ExchangeMarketStatus } from './exchange-market.entity';

@Injectable()
export default class ExchangeMarketsService {
    constructor(
        @InjectRepository(ExchangeMarket)
        private exchangeMarkets: Repository<ExchangeMarket>,
    ) {}

    async getOneById(id: string): Promise<ExchangeMarket> {
        const exchangeMarket = await this.exchangeMarkets.findOne({
            where: {
                id,
                status: ExchangeMarketStatus.ENABLED,
            },
        });
        if (exchangeMarket) {
            return exchangeMarket;
        }
        throw new HttpException(
            'Exchange market with this id does not exist',
            HttpStatus.NOT_FOUND,
        );
    }

    async getAll(): Promise<ExchangeMarket[]> {
        const where: FindManyOptions<ExchangeMarket>['where'] = {
            status: ExchangeMarketStatus.ENABLED,
        };

        return this.exchangeMarkets.find({
            where,
            // order: { // todo: join with Exchange and ORDER BY exchange name ASC
            //     exchange_id: 'ASC',
            // },
        });
    }
}
