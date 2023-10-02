import { Controller, HttpStatus, Get, Post, Body, Patch, Param, Delete, Req, Res, Next } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { NextFunction, Request, Response } from 'express';
import { Inmueble } from './entities/inmueble.entity';
import { ApiTags } from '@nestjs/swagger';
import { CiudadesService } from 'src/ciudades/ciudades.service';

@ApiTags('Inmuebles')
@Controller('inmuebles')
export class InmueblesController {

  constructor(private readonly inmueblesService: InmueblesService, private readonly ciudadService: CiudadesService) { }

  @Post('/create')
  async create(@Body() createInmuebleDto: CreateInmuebleDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Inmueble> {

    try {

      const ciudadRelatedToInmueble = await this.ciudadService.findOne(createInmuebleDto.ciudadId)
      const inmuebleToCreate = new Inmueble()

      inmuebleToCreate.area = createInmuebleDto.area
      inmuebleToCreate.codigo = createInmuebleDto.codigo
      inmuebleToCreate.precio = createInmuebleDto.precio
      inmuebleToCreate.numBanos = createInmuebleDto.numBanos
      inmuebleToCreate.tipoInmueble = createInmuebleDto.tipoInmueble
      inmuebleToCreate.estadoInmueble = createInmuebleDto.estadoInmueble
      inmuebleToCreate.numParqueadero = createInmuebleDto.numParqueadero
      inmuebleToCreate.numHabitaciones = createInmuebleDto.numHabitaciones
      inmuebleToCreate.ciudad = ciudadRelatedToInmueble

      const inmuebleCreated: Inmueble = await this.inmueblesService.create(inmuebleToCreate);

      response.status(HttpStatus.CREATED).json({ response: "Inmueble creado", datos: inmuebleCreated })
      return

    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }

  @Get('/allInmuebles')
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Inmueble[]> {
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
  async findOne(@Param('id') id: number, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Inmueble> {
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
  async update(@Param('id') id: number, @Body() updateInmuebleDto: UpdateInmuebleDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Inmueble> {

    if (!(updateInmuebleDto instanceof UpdateInmuebleDto)) {
      response.status(HttpStatus.NOT_FOUND).json({ response: "El cuerpo de la peticion es invalido" })
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
  async remove(@Param('id') id: number, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Inmueble> {
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
