import { ApiProperty } from "@nestjs/swagger"

export class CreateInmuebleDto {
  @ApiProperty()
  codigo: string
  @ApiProperty()
  area: string
  @ApiProperty()
  numHabitaciones: string
  @ApiProperty()
  numBanos: string
  @ApiProperty()
  numParqueadero: string
  @ApiProperty()
  precio: number
  @ApiProperty()
  tipoInmueble: 'arriendo' | 'venta'
  @ApiProperty()
  estadoInmueble: string
}
