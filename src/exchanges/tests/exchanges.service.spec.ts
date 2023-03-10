import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import Exchange from '../../exchanges/exchange.entity';
import ExchangesService from '../../exchanges/exchanges.service';

describe('The ExchangesService', () => {
    let exchangesService: ExchangesService;
    let findOne: jest.Mock;
    beforeEach(async () => {
        findOne = jest.fn();
        const module = await Test.createTestingModule({
            providers: [
                ExchangesService,
                {
                    provide: getRepositoryToken(Exchange),
                    useValue: {
                        findOne
                    }
                }
            ],
        })
          .compile();
        exchangesService = await module.get(ExchangesService);
    })
    describe('when getting a exchange by slug', () => {
        describe('and the exchange is found', () => {
            let exchange: Exchange;
            beforeEach(() => {
                exchange = new Exchange();
                findOne.mockReturnValue(Promise.resolve(exchange));
            })
            it('should return the exchange', async () => {
                const fetchedExchange = await exchangesService.getOneBySlug('kraken');
                expect(fetchedExchange).toEqual(exchange);
            })
        })
        describe('and the exchange is not found', () => {
            beforeEach(() => {
                findOne.mockReturnValue(null);
            })
            it('should throw an error', async () => {
                await expect(exchangesService.getOneBySlug('mtgox')).rejects.toThrow();
            })
        })
    })
});
