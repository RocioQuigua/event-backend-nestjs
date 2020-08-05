import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { state } from '@common/constants/constants';
import { User } from './user.entity';

@Entity()
export class TypeService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: false, default: state.ACTIVE })
  state: string;

  @Column({ type: 'varchar', nullable: true })
  imagen: string;
}

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  title: string;

  @Column({ type: "varchar", nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  prise: number;

  @Column({ type: 'varchar', nullable: false, default:state.ACTIVE })
  state: string;

  @Column({ type: 'varchar', nullable: false })
  imagen: string;

  @ManyToOne(
    type => TypeService,
    typeService => typeService.id,
  )
  @JoinColumn({ name: 'fk_type' })
  typeService: TypeService;

  @ManyToOne(
    type => User,
    user => user.id,
  )
  @JoinColumn({ name: 'fk_empresa' })
  empresa: User;
}

