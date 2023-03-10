import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExchanges1678402403641 implements MigrationInterface {
    name = 'CreateExchanges1678402403641';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "exchanges" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "website" character varying NOT NULL, "slug" character varying NOT NULL, "apiUri" character varying NOT NULL, "status" character varying NOT NULL, "socket" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_6c64aff88339ab41158e38f4de9" UNIQUE ("slug"), CONSTRAINT "PK_17ccd29473f939c68de98c2cea3" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exchanges"`);
    }
}
