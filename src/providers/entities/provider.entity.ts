import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('providers')
export class ProviderEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true })
  company: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  businessName: string;

  @Column({ nullable: true })
  email: string;

}
