import { ApiProperty } from "@nestjs/swagger"
export class CreateAsesoreDto {

  @ApiProperty()
  nombre: string

  @ApiProperty()
  correo: string

  @ApiProperty()
  apellidos: string

  @ApiProperty()
  telefono: string


}
