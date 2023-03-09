import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateExchange1678395277351 implements MigrationInterface {
    name = 'CreateExchange1678395277351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exchange" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "website" character varying NOT NULL, "slug" character varying NOT NULL, "apiUri" character varying NOT NULL, "status" character varying NOT NULL, "socket" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_8ba1a23bd0861214d642b848f94" UNIQUE ("slug"), CONSTRAINT "PK_cbd4568fcb476b57cebd8239895" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exchange"`);
    }

}
