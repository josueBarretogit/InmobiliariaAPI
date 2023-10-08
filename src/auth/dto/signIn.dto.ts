import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @ApiProperty()
  @IsNotEmpty()
  contrasena: string;
}
