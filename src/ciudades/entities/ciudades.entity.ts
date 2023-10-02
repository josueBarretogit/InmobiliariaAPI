
import { Inmueble } from "src/inmuebles/entities/inmueble.entity";
import { PrimaryGeneratedColumn, Column, Entity, Relation, OneToMany } from "typeorm";

@Entity({ name: 'ciudad' })
export class Ciudad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  nombre: string;

  @Column({ type: 'varchar', length: 30 })
  barrio: string;

  @Column({ type: 'varchar', length: 30 })
  departamento: string;

  @OneToMany((type) => Inmueble, (inmueble) => inmueble.ciudad)
  inmueble: Relation<Inmueble>[]

}

