
import { Inmueble } from "src/inmuebles/entities/inmueble.entity";
import { PrimaryGeneratedColumn, Column, Entity, Relation, OneToMany } from "typeorm";

@Entity({ name: 'asesores' })
export class Asesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  correo: string;

  @Column({ type: 'varchar', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', length: 70 })
  apellidos: string;

  @Column({ type: 'varchar', length: 30 })
  telefono: string;

  @OneToMany((type) => Inmueble, (inmueble) => inmueble.asesor)
  inmueble: Relation<Inmueble>[]

}
