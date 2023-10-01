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

  @Post()
  async create(@Body() createAsesoreDto: CreateAsesoreDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Asesor> {

    if (!(createAsesoreDto instanceof CreateAsesoreDto)) {
      response.status(HttpStatus.NOT_FOUND).json({ response: "ejecutado" })
      return
    }

    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.asesoresService.create(createAsesoreDto);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Asesor[]> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.asesoresService.findAll();
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: number, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Asesor> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.asesoresService.findOne(id);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() upadteAsesoreDto: UpdateAsesoreDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Asesor> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.asesoresService.update(+id, upadteAsesoreDto);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<Asesor> {
    try {
      response.status(HttpStatus.CREATED).json({ response: "ejecutado" })
      return this.asesoresService.remove(+id);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ response: "ejecutado" })
    }
  }

}
