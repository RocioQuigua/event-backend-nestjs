import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar', nullable: false})
    state: string;

    @ManyToOne(type => Profile, profile => profile.id)
    @JoinColumn({name: "fk_profile"})
    profile: Profile;
}