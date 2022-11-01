import { DeleteResult, Repository } from 'typeorm';
import { ProviderDto } from '../dto/provider.dto';
import { ProviderEntity } from '../entities/provider.entity';
export declare class ProviderRepository {
    private providerRepository;
    constructor(providerRepository: Repository<ProviderEntity>);
    findAll(): Promise<ProviderEntity[]>;
    findOne(id: number): Promise<ProviderEntity>;
    create(providerDto: ProviderDto): Promise<ProviderEntity>;
    update(id: number, providerDto: ProviderDto): Promise<ProviderEntity>;
    remove(id: number): Promise<DeleteResult>;
}
