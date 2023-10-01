
import { ApiProperty } from "@nestjs/swagger"

export class CreateCiudadeDto {

  @ApiProperty()
  nombre: string

  @ApiProperty()
  barrio: string

  @ApiProperty()
  departamento: string


}
