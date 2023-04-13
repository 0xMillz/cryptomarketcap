import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAssetsAndExchangeMarkets1679378884005 implements MigrationInterface {
    name = 'AddAssetsAndExchangeMarkets1679378884005';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "assets"
       (
           "id"                 uuid                     NOT NULL DEFAULT uuid_generate_v4(),
           "symbol"             character varying        NOT NULL,
           "display_name"       character varying        NOT NULL,
           "website"            character varying,
           "twitterUrl"         character varying,
           "slug"               character varying        NOT NULL,
           "explorer_url"       character varying,
           "max_supply"         numeric,
           "circulating_supply" numeric,
           "status"             character varying        NOT NULL DEFAULT 'disabled',
           "createdAt"          TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text):: timestamp (6) with time zone,
           "updatedAt"          TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text):: timestamp (6) with time zone,
           CONSTRAINT "UQ_29c37f8e694f8cc37463567dae2" UNIQUE ("slug"),
           CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id")
       )`,
        );
        await queryRunner.query(`CREATE TABLE "exchange-markets"
                             (
                                 "id"         uuid                     NOT NULL DEFAULT uuid_generate_v4(),
                                 "status"     character varying        NOT NULL DEFAULT 'disabled',
                                 "createdAt"  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text):: timestamp (6) with time zone,
                                 "updatedAt"  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text):: timestamp (6) with time zone,
                                 "exchangeId" uuid,
                                 "baseId"     uuid,
                                 "quoteId"    uuid,
                                 CONSTRAINT "PK_ecf4e106259d2b6d52a4723971e" PRIMARY KEY ("id")
                             )`);
        await queryRunner.query(`ALTER TABLE "exchange-markets"
        ADD CONSTRAINT "FK_eeffaa93fcb813b3bc2a531fca4" FOREIGN KEY ("exchangeId") REFERENCES "exchanges" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exchange-markets"
        ADD CONSTRAINT "FK_3fbd207af729c7023501b912f8c" FOREIGN KEY ("baseId") REFERENCES "assets" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exchange-markets"
        ADD CONSTRAINT "FK_e797dd57b9a55966f267ec3dfd5" FOREIGN KEY ("quoteId") REFERENCES "assets" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "exchange-markets" DROP CONSTRAINT "FK_e797dd57b9a55966f267ec3dfd5"`,
        );
        await queryRunner.query(
            `ALTER TABLE "exchange-markets" DROP CONSTRAINT "FK_3fbd207af729c7023501b912f8c"`,
        );
        await queryRunner.query(
            `ALTER TABLE "exchange-markets" DROP CONSTRAINT "FK_eeffaa93fcb813b3bc2a531fca4"`,
        );
        await queryRunner.query(`DROP TABLE "exchange-markets"`);
        await queryRunner.query(`DROP TABLE "assets"`);
    }
}
