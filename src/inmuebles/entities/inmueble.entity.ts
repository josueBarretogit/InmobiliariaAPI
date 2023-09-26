import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({ name: 'inmueble' })
export class Inmueble {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
