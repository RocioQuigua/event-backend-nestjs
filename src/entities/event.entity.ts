import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TypeEvent } from './typeEvent.entity';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  participants: number;

  @Column()
  startDate: number;

  @ManyToOne(
    type => Product,
    product => product.event,
  )
  products: Product[];

  @Column() // horas
  duration: number;

  @ManyToOne(
    type => TypeEvent,
    typeEvent => typeEvent.id,
  )
  @JoinColumn({ name: 'fk_type' })
  typeEvent: TypeEvent;

  @ManyToOne(
    type => User,
    user => user.id,
  )
  @JoinColumn({ name: 'fk_user' })
  user: User;
}
