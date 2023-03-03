import { Injectable } from '@nestjs/common';

@Injectable()
export class KrakenSeeder {
    tableName = 'Exchanges';

    // exchange: Partial<Exchange> = {
    //     id: '8bd2e712-2e8c-4d75-bb04-1dff17959262',
    //     name: 'Kraken',
    //     apiUri: 'ws.kraken.com',
    //     website: 'www.kraken.com',
    //     status: ExchangeStatus.ENABLED,
    //     socket: true,
    // };
    //
    // up(queryInterface: QueryInterface): void {
    //     queryInterface.bulkInsert(this.tableName, [this.exchange]);
    // }
    //
    // down(queryInterface) {
    //     queryInterface.delete(this.tableName, { id: this.exchange.id }, {});
    // }
}
