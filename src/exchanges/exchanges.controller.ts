import { Controller, Get } from '@nestjs/common';
import ExchangesService from './exchanges.service';

@Controller('exchanges')
export default class ExchangesController {
    constructor(private readonly postsService: ExchangesService) {}

    @Get()
    async getAllExchanges() {
        return this.postsService.getAllExchanges();
    }
}
