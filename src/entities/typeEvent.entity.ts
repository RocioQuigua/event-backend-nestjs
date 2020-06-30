import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TypeEvent{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    state: string;
}