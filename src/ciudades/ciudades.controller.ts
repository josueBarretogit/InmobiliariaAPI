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

  @Post()
  async create(@Body() createInmuebleDto: CreateCiudadeDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.ciudadesService.create(createInmuebleDto);
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad[]> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.ciudadesService.findAll();
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.ciudadesService.findOne(+id);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCiudadDto: UpdateCiudadeDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.ciudadesService.update(+id, updateCiudadDto);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Ciudad> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.ciudadesService.remove(+id);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }
}
