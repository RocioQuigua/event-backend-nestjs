import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from './service.entity';
import { User } from './user.entity';
import { Qualification } from './qualification.entity';
import { type } from 'os';

@Entity()
export class Profile{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    firstName: string;

    @Column({type: 'varchar', nullable: true})
    secondName: string;

    @Column({type: 'varchar', nullable: false})
    firstSurname: string;

    @Column({type: 'varchar', nullable: true})
    secondSurname: string;

    @ManyToOne(type => Service, service => service.id)
    @JoinColumn({name: "fk_service"})
    service: Service;

    @ManyToOne(type => Qualification, qualification => qualification.id)
    @JoinColumn({name: "fk_qualification"})
    qualification: Qualification; 

    @OneToOne(type => User, user => user.profile)
    user: User;
}