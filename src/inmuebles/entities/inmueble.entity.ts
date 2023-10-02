import { AutoMap } from "@automapper/classes";
import { Asesor } from "src/asesores/entities/asesores.entity";
import { Ciudad } from "src/ciudades/entities/ciudades.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany, Relation, ManyToOne } from "typeorm";

@Entity({ name: 'inmueble' })
export class Inmueble {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Asesor, (asesor) => asesor.inmueble, {
    eager: true,
  })
  asesor: Relation<Asesor>

  @ManyToOne((type) => Ciudad, (ciudad) => ciudad.inmueble, {
    eager: true
  })
  ciudad: Relation<Ciudad>

  @Column({ type: 'varchar', length: 30, unique: true })
  @AutoMap()
  codigo: string;

  @Column({ type: 'varchar', length: 30 })
  @AutoMap()
  area: string;

  @Column({ type: 'varchar', length: 30 })
  @AutoMap()
  numHabitaciones: string;

  @Column({ type: 'varchar', length: 30 })
  @AutoMap()
  numBanos: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  @AutoMap()
  numParqueadero: string;

  @Column({ type: 'double' })
  @AutoMap()
  precio: number;

  @Column({ type: 'varchar', length: 30 })
  @AutoMap()
  tipoInmueble: string;

  @Column({ type: 'varchar', length: 30 })
  @AutoMap()
  estadoInmueble: string | 'arriendo' | 'venta';

}
