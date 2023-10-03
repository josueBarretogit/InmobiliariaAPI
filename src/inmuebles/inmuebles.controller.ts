import { Controller, HttpStatus, Get, Post, Body, Patch, Param, Delete, Req, Res, Next } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { Request, Response } from 'express';
import { Inmueble } from './entities/inmueble.entity';
import { ApiTags } from '@nestjs/swagger';
import { CiudadesService } from 'src/ciudades/ciudades.service';
import { mapper } from 'src/automapper/automapper';
import { AsesoresService } from 'src/asesores/asesores.service';

@ApiTags('Inmuebles')
@Controller('inmuebles')
export class InmueblesController {

  constructor(private readonly inmueblesService: InmueblesService, private readonly ciudadService: CiudadesService, private readonly asesorService: AsesoresService) { }

  @Post('/create')
  async create(@Body() createInmuebleDto: CreateInmuebleDto, @Req() request: Request, @Res() response: Response): Promise<Inmueble | undefined> {

    if (!createInmuebleDto) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se envió datos" })
      return
    }

    try {

      const ciudadRelatedToInmueble = await this.ciudadService.findOne(createInmuebleDto.ciudadId)
      const asesorRelatedToInmueble = await this.asesorService.findOne(createInmuebleDto.asesorId)
      const inmuebleToCreate = new Inmueble()

      const prueba = new CreateInmuebleDto()
      prueba.area = createInmuebleDto.area
      prueba.codigo = createInmuebleDto.codigo

      const dto = mapper.map(createInmuebleDto, CreateInmuebleDto, Inmueble)

      dto.ciudad = ciudadRelatedToInmueble
      dto.asesor = asesorRelatedToInmueble

      console.log(dto)

      console.log(createInmuebleDto)

      const inmuebleCreated: Inmueble = await this.inmueblesService.create(dto);

      response.status(HttpStatus.CREATED).json({ response: "Inmueble creado", datos: inmuebleCreated })
      return

    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }

  @Get('/allInmuebles')
  async findAll(@Req() request: Request, @Res() response: Response): Promise<Inmueble[] | undefined> {

    try {
      const inmuebles = await this.inmueblesService.findAll();
      response.status(HttpStatus.OK).json({ inmuebles: inmuebles })
      return
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: number, @Req() request: Request, @Res() response: Response): Promise<Inmueble | undefined> {

    if (!id) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro el inmueble" })
      return
    }

    try {

      const inmueble = await this.inmueblesService.findOne(id);
      response.status(HttpStatus.FOUND).json({ inmueble: inmueble })
      return

    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateInmuebleDto: UpdateInmuebleDto, @Req() request: Request, @Res() response: Response): Promise<Inmueble | undefined> {

    if (!id || !updateInmuebleDto) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro el inmueble a Actualizar" })
      return
    }

    try {

      const updatedInmueble = await this.inmueblesService.update(id, updateInmuebleDto);
      response.status(HttpStatus.RESET_CONTENT).json({ updatedInmueble: updatedInmueble })
      return
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Req() request: Request, @Res() response: Response): Promise<Inmueble | undefined> {

    if (!id) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro el inmueble a eliminar" })
      return
    }

    try {

      const deletedInmueble = await this.inmueblesService.remove(id);
      response.status(HttpStatus.RESET_CONTENT).json({ deletedInmueble: deletedInmueble })
      return
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.CREATED).json({ "error": error })
    }
  }

}
