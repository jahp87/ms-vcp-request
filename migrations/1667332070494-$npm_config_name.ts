import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1667332070494 implements MigrationInterface {
    name = '$npmConfigName1667332070494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "providers" ("id" SERIAL NOT NULL, "taxId" character varying NOT NULL, "names" character varying NOT NULL, "fatherLastname" character varying NOT NULL, "motherLastname" character varying NOT NULL, "businessName" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_af13fc2ebf382fe0dad2e4793aa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "providers"`);
    }

}
