import { ProviderEntity } from '../../providers/entities/provider.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('requests')
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  requestStatusId: number;

  @Column()
  countryId: number;

  @Column()
  origin: string;

  @Column()
  typeProviderId: number;

  @Column()
  businessGroupId: number;

  @Column()
  requestId: string;

  @Column({
    type: 'json',
  })
  requestDetails: JSON;

  @Column({
    type: 'json',
  })
  societies: JSON;

  @ManyToOne(() => ProviderEntity)
  @JoinColumn({ name: 'providerId' })
  provider: ProviderEntity;

  @Column()
  providerId: number;
}
