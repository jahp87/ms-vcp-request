"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigName1667332070494 = void 0;
class $npmConfigName1667332070494 {
    constructor() {
        this.name = '$npmConfigName1667332070494';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "providers" ("id" SERIAL NOT NULL, "taxId" character varying NOT NULL, "names" character varying NOT NULL, "fatherLastname" character varying NOT NULL, "motherLastname" character varying NOT NULL, "businessName" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_af13fc2ebf382fe0dad2e4793aa" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "providers"`);
    }
}
exports.$npmConfigName1667332070494 = $npmConfigName1667332070494;
//# sourceMappingURL=1667332070494-$npm_config_name.js.map