import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Next, HttpStatus } from '@nestjs/common';
import { AsesoresService } from './asesores.service';
import { CreateAsesoreDto } from './dto/create-asesore.dto';
import { UpdateAsesoreDto } from './dto/update-asesore.dto';

import { NextFunction, Request, Response } from 'express';
import { Asesor } from './entities/asesores.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Asesores')
@Controller('asesores')
export class AsesoresController {

  constructor(private readonly asesoresService: AsesoresService) { }

  @Post('/createAsesor')
  async create(@Body() createAsesoreDto: CreateAsesoreDto, @Req() request: Request, @Res() response: Response): Promise<Asesor> {

    if (!createAsesoreDto) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "Cuerpo no valido" })
      return
    }

    if (!createAsesoreDto) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "Cuerpo de la peticion no valido" })
      return
    }

    try {
      const asesorCreated = await this.asesoresService.create(createAsesoreDto);
      response.status(HttpStatus.CREATED).json({ asesorCreated })
      return asesorCreated
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "some error ocurred", error })
    }
  }

  @Get('/getAsesores')
  async findAll(@Req() request: Request, @Res() response: Response): Promise<Asesor[]> {

    try {
      const asesores = await this.asesoresService.findAll();
      response.status(HttpStatus.OK).json({ asesores })
      return asesores

    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado", error })

    }
  }


  @Get(':id')
  async findOne(@Param('id') id: number, @Req() request: Request, @Res() response: Response): Promise<Asesor> {

    if (!id) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro el asesor " })
      return
    }

    try {
      const asesor = await this.asesoresService.findOne(id);
      response.status(HttpStatus.OK).json({ asesor })
      return asesor
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado", error })
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateAsesoreDto: UpdateAsesoreDto, @Req() request: Request, @Res() response: Response): Promise<Asesor> {

    if (!id || !updateAsesoreDto) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro el asesor a editar" })
      return
    }

    try {

      const asesorToUpdate = await this.asesoresService.update(id, updateAsesoreDto);
      response.status(HttpStatus.OK).json({ asesorToUpdate })
      return asesorToUpdate

    } catch (error) {

      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado", error })

    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Req() request: Request, @Res() response: Response): Promise<Asesor> {

    if (!id) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: "No se encontro el asesor a remover" })
      return
    }

    try {

      const asesorToDelete = await this.asesoresService.remove(id);
      response.status(HttpStatus.CREATED).json({ asesorToDelete })
      return asesorToDelete

    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "hubo un error", error })
    }
  }

}
