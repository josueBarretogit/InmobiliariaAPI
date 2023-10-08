import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  correo: string;

  @Column({ type: 'varchar', length: 30 })
  contrasena: string;
}
