import { PartialType } from '@nestjs/mapped-types';
import { CreateAsesoreDto } from './create-asesore.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateAsesoreDto extends PartialType(CreateAsesoreDto) {

  @ApiProperty()
  @IsNotEmpty()
  nombre: string

  @ApiProperty()
  @IsNotEmpty()
  correo: string

  @ApiProperty()
  @IsNotEmpty()
  apellidos: string

  @ApiProperty()
  @IsNotEmpty()
  telefono: string
}
