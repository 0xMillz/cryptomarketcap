import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedBinanceUSExchange1678417995959 implements MigrationInterface {
    name = 'SeedBinanceUSExchange1678417995959';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "exchanges"("id", "name", "website", "slug", "apiUri", "status", "socket",
                                                     "createdAt", "updatedAt")
                             VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, DEFAULT,
                                     DEFAULT) RETURNING "id", "createdAt", "updatedAt"`,
            [
                'Binance.US',
                'https://www.binance.us/',
                'binance-us',
                'wss://stream.binance.us:9443',
                'enabled',
                1,
            ],
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE
                             FROM exchanges
                             WHERE slug = 'binance-us'`);
    }
}
