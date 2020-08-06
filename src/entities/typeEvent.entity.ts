import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { state } from '@common/constants/constants';

@Entity()
export class TypeEvent{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type:"varchar", default: state.ACTIVE})
    state: string;
}