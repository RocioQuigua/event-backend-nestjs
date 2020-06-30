import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false})
    name: string;
    
    @Column({ type: 'varchar', default: 'ACTIVE'})
    state: string;
}