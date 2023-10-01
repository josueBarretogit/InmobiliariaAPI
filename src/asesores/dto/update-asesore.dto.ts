import { PartialType } from '@nestjs/mapped-types';
import { CreateAsesoreDto } from './create-asesore.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAsesoreDto extends PartialType(CreateAsesoreDto) {

  @ApiProperty()
  id: string
}
