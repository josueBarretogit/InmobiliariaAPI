import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadeDto } from './create-ciudade.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCiudadeDto extends PartialType(CreateCiudadeDto) {
  @ApiProperty()
  nombre: string

  @ApiProperty()
  barrio: string

  @ApiProperty()
  departamento: string
}
