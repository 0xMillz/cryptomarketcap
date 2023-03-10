import { MigrationInterface, QueryRunner } from "typeorm"
import Exchange, { ExchangeStatus } from "../../exchanges/exchange.entity";

export class SeedBinanceUSExchange1678417995959 implements MigrationInterface {
    name = 'SeedBinanceUSExchange1678417995959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            queryRunner.manager.create<Exchange>(Exchange, {
                name: 'Binance.US',
                website: 'https://www.binance.us/',
                slug: 'binance-us',
                apiUri: 'wss://stream.binance.us:9443',
                status: ExchangeStatus.ENABLED,
                socket: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM exchanges WHERE slug = 'binance-us'`);
    }

}
