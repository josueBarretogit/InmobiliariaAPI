import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

export class SignInDto extends CreateUsuarioDto {}
