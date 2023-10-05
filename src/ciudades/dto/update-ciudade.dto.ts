import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadeDto } from './create-ciudade.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateCiudadeDto extends PartialType(CreateCiudadeDto) {
  @ApiProperty()
  @IsNotEmpty()
  nombre: string

  @ApiProperty()
  @IsNotEmpty()
  barrio: string

  @ApiProperty()
  @IsNotEmpty()
  departamento: string
}
