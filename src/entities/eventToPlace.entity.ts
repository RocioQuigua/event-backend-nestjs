import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { type } from 'os';
import { Place } from './place.entity';
import { Event } from './event.entity';

@Entity()
export class EventToPlace{
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    placeId!: number;

    @Column()
    eventId!: number;

    @Column()
    price!: number;

    @ManyToOne(type => Place, place => place.EventToPlace)
    place!: Place;

    @ManyToOne(type => Event, event => event.eventToPlace)
    event!: Event;
}