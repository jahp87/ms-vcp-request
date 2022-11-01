"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const provider_entity_1 = require("./src/providers/entities/provider.entity");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'jahp',
    database: 'dbvcp',
    entities: [provider_entity_1.ProviderEntity],
    synchronize: true,
    migrations: ['./migrations/*.ts'],
});
//# sourceMappingURL=typeOrm.config.js.map