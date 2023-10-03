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
  async create(@Body() createInmuebleDto: CreateCiudadeDto, @Req() request: Request, @Res() response: Response): Promise<Ciudad | undefined> {

    if (!CreateCiudadeDto) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se enviaron datos" })
      return
    }

    try {
      const ciudadToCreate = await this.ciudadesService.create(createInmuebleDto);
      response.status(HttpStatus.CREATED).json({ ciudadToCreate })
      return ciudadToCreate
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error })
      return
    }
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response): Promise<Ciudad[] | undefined> {

    try {
      const ciudades = await this.ciudadesService.findAll();
      response.status(HttpStatus.CREATED).json({ ciudades })
      return ciudades

    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error })
      return
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: number, @Req() request: Request, @Res() response: Response): Promise<Ciudad | undefined> {

    if (!id) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontró la ciudad" })
      return
    }

    try {

      const ciudad = await this.ciudadesService.findOne(id);
      response.status(HttpStatus.OK).json({ ciudad })
      return ciudad

    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error })
      return
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCiudadDto: UpdateCiudadeDto, @Req() request: Request, @Res() response: Response): Promise<Ciudad | undefined> {

    if (!id || !updateCiudadDto) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro la ciudad a actualizar" })
      return
    }


    try {
      const ciudadToUpdate = await this.ciudadesService.update(id, updateCiudadDto);
      response.status(HttpStatus.OK).json({ ciudadToUpdate })
      return ciudadToUpdate

    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
      return
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Req() request: Request, @Res() response: Response): Promise<Ciudad | undefined> {

    if (!id) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro la ciudad a remover" })
      return
    }

    try {
      const ciudadToRemove = await this.ciudadesService.remove(id);
      response.status(HttpStatus.CREATED).json({ ciudadToRemove })
      return ciudadToRemove
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error })
      return
    }
  }
}
