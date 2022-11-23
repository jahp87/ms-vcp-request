import { Injectable } from '@nestjs/common';
import { ProviderDto, UpdateProviderDto } from './dto/provider.dto';
import { ProviderEntity } from './entities/provider.entity';
import { ProviderRepository } from './repositories/provider.repository';

@Injectable()
export class ProvidersService {
  constructor(private providerRepository: ProviderRepository) {}
  async create(providerDto: ProviderDto): Promise<ProviderEntity> {
    const provider: ProviderEntity = await this.providerRepository.create(
      providerDto,
    );
    return provider;
  }

  async findAll(): Promise<ProviderEntity[]> {
    const providers: ProviderEntity[] = await this.providerRepository.findAll();
    return providers;
  }

  async findOne(id: number): Promise<ProviderEntity> {
    const provider: ProviderEntity = await this.providerRepository.findOne(id);
    return provider;
  }

  async update(
    id: number,
    _updateProviderDto: UpdateProviderDto,
  ): Promise<ProviderEntity> {
    const updateProvider = await this.providerRepository.update(
      id,
      _updateProviderDto,
    );
    return updateProvider;
  }

  async remove(id: number): Promise<void> {
    await this.providerRepository.remove(id);
  }
}
