import { ProviderDto } from './dto/provider.dto';
import { ProviderEntity } from './entities/provider.entity';
import { ProviderRepository } from './repositories/provider.repository';
export declare class ProvidersService {
    private providerRepository;
    constructor(providerRepository: ProviderRepository);
    create(providerDto: ProviderDto): Promise<ProviderEntity>;
    findAll(): Promise<ProviderEntity[]>;
    findOne(id: number): Promise<ProviderEntity>;
    update(id: number, _updateProviderDto: ProviderDto): Promise<ProviderEntity>;
    remove(id: number): Promise<void>;
}
