import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('persons')
@Index(['id', 'name'])
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;
}
