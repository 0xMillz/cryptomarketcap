import { MigrationInterface, QueryRunner } from 'typeorm';
import Exchange, { ExchangeStatus } from '../../exchanges/exchange.entity';

export class SeedKrakenExchange1678403176953 implements MigrationInterface {
    name = 'SeedKrakenExchange1678403176953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            queryRunner.manager.create<Exchange>(Exchange, {
                name: 'Kraken',
                website: 'https://www.kraken.com/',
                slug: 'kraken',
                apiUri: 'ws.kraken.com',
                status: ExchangeStatus.ENABLED,
                socket: true
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM exchanges WHERE slug = 'kraken'`);
    }

}
