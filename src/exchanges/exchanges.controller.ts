import { Controller, Get, Param } from '@nestjs/common';
import ExchangesService from './exchanges.service';
import FindOneParams from './utils/findOneParams';

@Controller('exchanges')
export default class ExchangesController {
    constructor(private readonly exchangesService: ExchangesService) {}

    @Get()
    async getAllExchanges() {
        return this.exchangesService.getAll();
    }

    @Get(':slug')
    async getOneExchange(@Param() { slug }: FindOneParams) {
        return this.exchangesService.getOneBySlug(slug);
    }
}
