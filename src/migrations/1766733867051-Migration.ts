import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1766733867051 implements MigrationInterface {
    name = 'Migration1766733867051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "name" TO "fullName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "fullName" TO "name"`);
    }

}
