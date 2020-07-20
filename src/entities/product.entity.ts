import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Service } from './service.entity';
import { Event } from './event.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  prise: number;

  @Column({ type: 'varchar', nullable: false })
  state: string;

  @Column({ type: 'varchar', nullable: false })
  imagen: string;

  @OneToMany(type => Event, event => event.products)
  event: Event;

  @ManyToOne(
    type => Service,
    service => service.id,
  )
  @JoinColumn({ name: 'fk_service' })
  service: Service;
}
