import { AutoMap } from "@automapper/classes"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateInmuebleDto {

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  codigo: string

  @ApiProperty()
  @IsNotEmpty()
  asesorId: number

  @ApiProperty()
  @IsNotEmpty()
  ciudadId: number

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  area: string

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  numHabitaciones: string

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  numBanos: string

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  numParqueadero: string

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  precio: number

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()

  tipoInmueble: 'arriendo' | 'venta'

  @AutoMap()
  @ApiProperty()
  @IsNotEmpty()
  estadoInmueble: string

}
