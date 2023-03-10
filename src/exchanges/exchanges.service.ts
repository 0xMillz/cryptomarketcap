import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import Exchange, { ExchangeStatus } from './exchange.entity';


@Injectable()
export default class ExchangesService {
    constructor(
        @InjectRepository(Exchange)
        private postsRepository: Repository<Exchange>,
    ) {}

    async getAllExchanges(): Promise<Exchange[]> {
        const where: FindManyOptions<Exchange>['where'] = {
            status: ExchangeStatus.ENABLED
        };

        return this.postsRepository.find({
            where,
            order: {
                name: 'ASC',
            }
        });
    }
}
