import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateAsesoreDto {

  @ApiProperty()
  @IsNotEmpty()
  nombre: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  correo: string

  @ApiProperty()
  @IsNotEmpty()
  apellidos: string

  @ApiProperty()
  @IsNotEmpty()
  telefono: string

}
