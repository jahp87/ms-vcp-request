import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('providers')
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  taxId: string;

  @Column()
  names: string;

  @Column()
  fatherLastname: string;

  @Column()
  motherLastname: string;

  @Column()
  businessName: string;

  @Column()
  email: string;
}
