import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role.entity';
import { Profile } from './profile.entity';

@Entity() 
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @Column({type: 'varchar', default: 'ACTIVE'})
    state: string;

    @ManyToOne(type =>Role, role => role.id, {cascade: true} )
    @JoinColumn({name: 'fk_role'})
    fk_role: Role;

    @ManyToOne(type => Profile, profile => profile.id)
    @JoinColumn({name: 'fk_profile'})
    fk_person: Profile;


}

