import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Role } from './role.entity';
import { Profile } from './profile.entity';

@Entity() 
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    username: string;
    
    @Column({type: 'varchar', nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @Column({type: 'varchar', default: 'ACTIVE'})
    state: string;

    @ManyToOne(type =>Role, role => role.users)
    @JoinColumn({name: 'fk_role'})
    role: Role;

    @OneToOne(type => Profile, profile => Profile, {cascade: true})
    @JoinColumn({name: 'fk_profile'})
    profile: Profile;

}

