"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersService = void 0;
const common_1 = require("@nestjs/common");
const provider_repository_1 = require("./repositories/provider.repository");
let ProvidersService = class ProvidersService {
    constructor(providerRepository) {
        this.providerRepository = providerRepository;
    }
    async create(providerDto) {
        const provider = await this.providerRepository.create(providerDto);
        return provider;
    }
    async findAll() {
        const providers = await this.providerRepository.findAll();
        return providers;
    }
    async findOne(id) {
        const provider = await this.providerRepository.findOne(id);
        return provider;
    }
    async update(id, _updateProviderDto) {
        const updateProvider = await this.providerRepository.update(id, _updateProviderDto);
        return updateProvider;
    }
    async remove(id) {
        await this.providerRepository.remove(id);
    }
};
ProvidersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [provider_repository_1.ProviderRepository])
], ProvidersService);
exports.ProvidersService = ProvidersService;
//# sourceMappingURL=providers.service.js.map