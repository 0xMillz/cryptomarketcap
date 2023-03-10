import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedExchangeTwitterUrls1678423218530 implements MigrationInterface {
    name = 'SeedExchangeTwitterUrls1678423218530';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            queryRunner.query(`UPDATE exchanges
                                   SET "twitterUrl" = 'https://twitter.com/krakenfx'
                                   WHERE slug = 'kraken'`),
            queryRunner.query(
                `UPDATE exchanges
                 SET "twitterUrl" = 'https://twitter.com/BinanceUS'
                 WHERE slug = 'binance-us'`,
            ),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await Promise.all([
            queryRunner.query(`UPDATE exchanges
                                   SET "twitterUrl" = null
                                   WHERE slug = 'kraken'`),
            queryRunner.query(
                `UPDATE exchanges
                 SET "twitterUrl" = null
                 WHERE slug = 'binance-us'`,
            ),
        ]);
    }
}
