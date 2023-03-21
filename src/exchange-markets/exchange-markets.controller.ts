import { Controller, Get, Param } from '@nestjs/common';
import ExchangesService from './exchange-markets.service';
import FindOneParams from './utils/findOneParams';

@Controller('exchange-markets')
export default class ExchangeMarketsController {
    constructor(private readonly exchangesService: ExchangesService) {}

    @Get()
    async getAllExchangeMarkets() {
        return this.exchangesService.getAll();
    }

    @Get(':id')
    async getOneExchangeMarket(@Param() { id }: FindOneParams) {
        return this.exchangesService.getOneById(id);
    }
}
