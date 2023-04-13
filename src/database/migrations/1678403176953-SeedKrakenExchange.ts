import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedKrakenExchange1678403176953 implements MigrationInterface {
    name = 'SeedKrakenExchange1678403176953';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "exchanges"("id", "name", "website", "slug", "apiUri", "status", "socket",
                                                     "createdAt", "updatedAt")
                             VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, DEFAULT, DEFAULT)`,
            ['Kraken', 'https://www.kraken.com/', 'kraken', 'ws.kraken.com', 'enabled', 1],
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE
                             FROM exchanges
                             WHERE slug = 'kraken'`);
    }
}
