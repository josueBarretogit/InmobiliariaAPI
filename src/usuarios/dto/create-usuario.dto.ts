import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  correo: string;

  @ApiProperty()
  @IsNotEmpty()
  contrasena: string;
}
