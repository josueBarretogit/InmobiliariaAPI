import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Next, HttpStatus } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CreateCiudadeDto } from './dto/create-ciudade.dto';
import { UpdateCiudadeDto } from './dto/update-ciudade.dto';

import { NextFunction, Request, Response } from 'express';
import { Ciudad } from './entities/ciudades.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ciudades')
@Controller('ciudades')
export class CiudadesController {

  constructor(private ciudadesService: CiudadesService) { }

  @Post('createCiudad')
  async create(@Body() createInmuebleDto: CreateCiudadeDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      const ciudadToCreate = await this.ciudadesService.create(createInmuebleDto);
      response.status(HttpStatus.CREATED).json({ ciudadToCreate })
      return ciudadToCreate
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad[]> {
    try {
      const ciudades = await this.ciudadesService.findAll();
      response.status(HttpStatus.CREATED).json({ ciudades })
      return ciudades
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      const ciudad = await this.ciudadesService.findOne(+id);
      response.status(HttpStatus.CREATED).json({ ciudad })
      return ciudad
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCiudadDto: UpdateCiudadeDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      const ciudadToUpdate = await this.ciudadesService.update(+id, updateCiudadDto);
      response.status(HttpStatus.CREATED).json({ ciudadToUpdate })
      return ciudadToUpdate
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      const ciudadToRemove = await this.ciudadesService.remove(+id);
      response.status(HttpStatus.CREATED).json({ ciudadToRemove })
      return ciudadToRemove
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }
}
