import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(7)
  contrasena: string;
}
