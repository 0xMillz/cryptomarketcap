import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import Exchange, { ExchangeStatus } from './exchange.entity';

@Injectable()
export default class ExchangesService {
    constructor(
        @InjectRepository(Exchange)
        private exchangesRepository: Repository<Exchange>,
    ) {}

    async getOneBySlug(slug: string): Promise<Exchange> {
        const exchange = await this.exchangesRepository.findOne({
            where: {
                slug,
                status: ExchangeStatus.ENABLED,
            },
        });
        if (exchange) {
            return exchange;
        }
        throw new HttpException('Exchange with this slug does not exist', HttpStatus.NOT_FOUND);
    }

    async getAll(): Promise<Exchange[]> {
        const where: FindManyOptions<Exchange>['where'] = {
            status: ExchangeStatus.ENABLED,
        };

        return this.exchangesRepository.find({
            where,
            order: {
                name: 'ASC',
            },
        });
    }
}
