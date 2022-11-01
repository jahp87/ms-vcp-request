import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { ProviderEntity } from './entities/provider.entity';
import { ProviderRepository } from './repositories/provider.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderEntity])],
  controllers: [ProvidersController],
  providers: [ProvidersService, ProviderRepository],
})
export class ProvidersModule {}
