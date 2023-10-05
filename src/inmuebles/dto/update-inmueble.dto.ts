import { PartialType } from '@nestjs/mapped-types';
import { CreateInmuebleDto } from './create-inmueble.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateInmuebleDto extends PartialType(CreateInmuebleDto) {
  @ApiProperty()
  @IsNotEmpty()
  codigo: string

  @ApiProperty()
  @IsNotEmpty()
  asesorId: number

  @ApiProperty()
  @IsNotEmpty()
  ciudadId: number

  @ApiProperty()
  @IsNotEmpty()
  area: string

  @ApiProperty()
  @IsNotEmpty()
  numHabitaciones: string

  @ApiProperty()
  @IsNotEmpty()
  numBanos: string

  @ApiProperty()
  @IsNotEmpty()
  numParqueadero: string

  @ApiProperty()
  @IsNotEmpty()
  precio: number

  @ApiProperty()
  @IsNotEmpty()
  tipoInmueble: 'arriendo' | 'venta'

  @ApiProperty()
  @IsNotEmpty()
  estadoInmueble: string
}
