import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm'
import { EventToPlace } from './EventToPlace.entity';

@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    state: string;

    @Column()
    ubication: string;

    @OneToMany(type => EventToPlace, eventToPlace => eventToPlace.place)
    EventToPlace!: EventToPlace[];


}