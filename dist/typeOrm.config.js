"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const provider_entity_1 = require("./src/providers/entities/provider.entity");
const typeorm_1 = require("typeorm");
const request_entity_1 = require("./src/requests/entities/request.entity");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'jahp',
    database: 'dbvcp',
    entities: [request_entity_1.RequestEntity, provider_entity_1.ProviderEntity],
    synchronize: true,
    migrations: ['./migrations/*.ts'],
});
//# sourceMappingURL=typeOrm.config.js.map