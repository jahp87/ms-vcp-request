import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { ProviderEntity } from './entities/provider.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProviderRepository } from './repositories/provider.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderEntity])],
  controllers: [ProvidersController],
  providers: [ProvidersService, ProviderRepository],
})
export class ProvidersModule {}
