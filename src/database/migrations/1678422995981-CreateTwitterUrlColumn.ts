import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTwitterUrlColumn1678422995981 implements MigrationInterface {
    name = 'CreateTwitterUrlColumn1678422995981';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exchanges" ADD "twitterUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "exchanges" DROP COLUMN "createdAt"`);
        await queryRunner.query(
            `ALTER TABLE "exchanges" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`,
        );
        await queryRunner.query(`ALTER TABLE "exchanges" DROP COLUMN "updatedAt"`);
        await queryRunner.query(
            `ALTER TABLE "exchanges" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exchanges" DROP COLUMN "updatedAt"`);
        await queryRunner.query(
            `ALTER TABLE "exchanges" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`,
        );
        await queryRunner.query(`ALTER TABLE "exchanges" DROP COLUMN "createdAt"`);
        await queryRunner.query(
            `ALTER TABLE "exchanges" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`,
        );
        await queryRunner.query(`ALTER TABLE "exchanges" DROP COLUMN "twitterUrl"`);
    }
}
