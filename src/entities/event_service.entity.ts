import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Event } from './event.entity';
import { Service } from './service.entity';

@Entity()
export class EventService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne( type => Event, event => event.id )
  @JoinColumn({ name: 'fk_event' })
  event: Event;

  @ManyToOne( type => Service, service => service.id )
  @JoinColumn({ name: 'fk_service' })
  service: Service;

  @Column()
  state: string;
}
