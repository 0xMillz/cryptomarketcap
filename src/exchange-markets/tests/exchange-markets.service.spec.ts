import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import ExchangeMarket from '../../exchange-markets/exchange-market.entity';
import ExchangeMarketsService from '../../exchange-markets/exchange-markets.service';

describe('The Exchange Markets Service', () => {
    let exchangeMarketsService: ExchangeMarketsService;
    let findOne: jest.Mock;
    beforeEach(async () => {
        findOne = jest.fn();
        const module = await Test.createTestingModule({
            providers: [
                ExchangeMarketsService,
                {
                    provide: getRepositoryToken(ExchangeMarket),
                    useValue: {
                        findOne,
                    },
                },
            ],
        }).compile();
        exchangeMarketsService = await module.get(ExchangeMarketsService);
    });
    describe('when getting a exchange market by id', () => {
        describe('and the exchange market is found', () => {
            let exchangeMarket: ExchangeMarket;
            beforeEach(() => {
                exchangeMarket = new ExchangeMarket();
                findOne.mockReturnValue(Promise.resolve(exchangeMarket));
            });
            it('should return the exchange market', async () => {
                const fetchedExchangeMarket = await exchangeMarketsService.getOneById(
                    'existing_id',
                );
                expect(fetchedExchangeMarket).toEqual(exchangeMarket);
            });
        });
        describe('and the exchange market is not found', () => {
            beforeEach(() => {
                findOne.mockReturnValue(null);
            });
            it('should throw an error', async () => {
                await expect(
                    exchangeMarketsService.getOneById('kfjaskdfjldkfj;'),
                ).rejects.toThrow();
            });
        });
    });
});
