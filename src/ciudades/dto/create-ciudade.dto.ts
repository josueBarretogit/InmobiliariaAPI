
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateCiudadeDto {

  @ApiProperty()
  @IsNotEmpty()
  nombre: string

  @ApiProperty()
  @IsNotEmpty()
  barrio: string

  @ApiProperty()
  @IsNotEmpty()
  departamento: string


}
