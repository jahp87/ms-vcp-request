import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ProviderDto } from '../dto/provider.dto';
import { ProviderEntity } from '../entities/provider.entity';


@Injectable()
export class ProviderRepository {
  constructor(
    @InjectRepository(ProviderEntity)
    private providerRepository: Repository<ProviderEntity>,
  ) {}

  findAll(): Promise<ProviderEntity[]> {
    return this.providerRepository.find();
  }

  findOne(id: number): Promise<ProviderEntity> {
    return this.providerRepository.findOneBy({ id });
  }

  async create(providerDto: ProviderDto): Promise<ProviderEntity> {
    return await this.providerRepository.save(providerDto);
  }

  async update(id: number, providerDto: ProviderDto) {
    await this.providerRepository.update(id, providerDto);
    return this.providerRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.providerRepository.delete(id);
  }
}

