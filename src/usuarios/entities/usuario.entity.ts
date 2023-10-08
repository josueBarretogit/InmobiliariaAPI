import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  correo: string;

  @Column({ type: 'varchar', length: 100 })
  contrasena: string;
}
