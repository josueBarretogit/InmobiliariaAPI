import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadeDto } from './create-ciudade.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCiudadeDto extends PartialType(CreateCiudadeDto) {
  @ApiProperty()
  id: string
}
