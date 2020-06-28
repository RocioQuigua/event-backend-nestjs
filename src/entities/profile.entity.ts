import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Profile{

    @PrimaryColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    firstName: string;

    @Column({type: 'varchar', nullable: true})
    secondName: string;

    @Column({type: 'varchar', nullable: false})
    firstSurname: string;

    @Column({type: 'varchar', nullable: true})
    secondSurname: string;
}