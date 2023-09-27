import { Asesor } from "src/asesores/entities/asesores.entity";
import { Ciudad } from "src/ciudades/entities/ciudades.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany, Relation, ManyToOne } from "typeorm";

@Entity({ name: 'inmueble' })
export class Inmueble {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Asesor, (asesor) => asesor.inmueble)
  asesor: Relation<Asesor>

  @ManyToOne(() => Ciudad, (ciudad) => ciudad.inmueble)
  ciudad: Relation<Ciudad>

  @Column({ type: 'varchar', length: 30, unique: true })
  codigo: string;

  @Column({ type: 'varchar', length: 30 })
  area: string;

  @Column({ type: 'varchar', length: 30 })
  numHabitaciones: string;

  @Column({ type: 'varchar', length: 30 })
  numBanos: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  numParqueadero: string;

  @Column({ type: 'double' })
  precio: number;

  @Column({ type: 'varchar', length: 30 })
  tipoInmueble: string;

  @Column({ type: 'varchar', length: 30 })
  estadoInmueble: string | 'arriendo' | 'venta';

}