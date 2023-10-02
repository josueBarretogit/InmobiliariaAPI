import { AutoMap } from "@automapper/classes"
import { ApiProperty } from "@nestjs/swagger"

export class CreateInmuebleDto {

  @AutoMap()
  @ApiProperty()
  codigo: string

  @ApiProperty()
  asesorId: number

  @ApiProperty()
  ciudadId: number

  @AutoMap()
  @ApiProperty()
  area: string

  @AutoMap()
  @ApiProperty()
  numHabitaciones: string

  @AutoMap()
  @ApiProperty()
  numBanos: string

  @AutoMap()
  @ApiProperty()
  numParqueadero: string

  @AutoMap()
  @ApiProperty()
  precio: number

  @AutoMap()
  @ApiProperty()
  tipoInmueble: 'arriendo' | 'venta'

  @AutoMap()
  @ApiProperty()
  estadoInmueble: string

}
