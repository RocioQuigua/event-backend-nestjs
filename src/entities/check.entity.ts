import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Check {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creationDate: Date;

  @Column({ type: 'numeric', nullable: false })
  totalPrise: string;

  @OneToOne(
    type => Event,
    event => event.id,
  )
  @JoinColumn({ name: 'fk_event' })
  event: Event;
}
