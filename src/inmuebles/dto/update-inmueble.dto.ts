import { PartialType } from '@nestjs/mapped-types';
import { CreateInmuebleDto } from './create-inmueble.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateInmuebleDto extends PartialType(CreateInmuebleDto) {
  @ApiProperty()
  id: number
}
