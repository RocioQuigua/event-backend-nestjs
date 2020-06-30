import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, JoinTable, OneToMany } from 'typeorm'
import { Place } from './place.entity';
import { TypeEvent } from './typeEvent.entity';
import { EventToPlace } from './EventToPlace.entity';
import { type } from 'os';
import { User } from './user.entity';

@Entity()
export class Event{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    participants: number;
   
    @OneToMany(type => EventToPlace, eventToPlace => eventToPlace.event)
    eventToPlace!: EventToPlace[];
    
    @ManyToOne(type => User, user => user.id)
    @JoinColumn({name: "fk_user"})
    user: User;
}