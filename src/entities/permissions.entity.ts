import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link: string;

    @Column()
    name: string; 
}


@Entity()
export class Permissions {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar", default:"ACTIVE"})
    state: string;

    @ManyToOne(type => Role, role => role.id)
    @JoinColumn({ name: "fk_role" })
    role: Role;

    @ManyToOne(type => Menu, menu => menu.id, { eager: true})
    @JoinColumn({ name: "fk_menu" })
    menu: Menu;

}