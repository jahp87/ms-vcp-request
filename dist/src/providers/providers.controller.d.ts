import { ProvidersService } from './providers.service';
import { ProviderDto } from './dto/provider.dto';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    create(createProviderDto: ProviderDto): Promise<import("./entities/provider.entity").ProviderEntity>;
    findAll(): Promise<import("./entities/provider.entity").ProviderEntity[]>;
    findOne(id: string): Promise<import("./entities/provider.entity").ProviderEntity>;
    update(id: string, updateProviderDto: ProviderDto): Promise<import("./entities/provider.entity").ProviderEntity>;
    remove(id: string): Promise<void>;
}
