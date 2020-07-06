import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Qualification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  state: string;
}
