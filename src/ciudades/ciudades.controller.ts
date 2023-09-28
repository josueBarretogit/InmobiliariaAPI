import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Next } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CreateCiudadeDto } from './dto/create-ciudade.dto';
import { UpdateCiudadeDto } from './dto/update-ciudade.dto';

import { NextFunction, Request, Response } from 'express';

@Controller('ciudades')
export class CiudadesController {
  constructor(private readonly ciudadesService: CiudadesService) { }

  @Post()
  async create(@Body() createInmuebleDto: CreateCiudadeDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.ciudadesService.create(createInmuebleDto);
    } catch (error) {
      console.log(error)
      response.status(400).json({ "error": error })
    }
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.ciudadesService.findAll();
    } catch (error) {
      console.log(error)
      response.status(400).json({ "error": error })
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.ciudadesService.findOne(+id);
    } catch (error) {
      console.log(error)
      response.status(400).json({ "error": error })
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCiudadDto: UpdateCiudadeDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.ciudadesService.update(+id, updateCiudadDto);
    } catch (error) {
      console.log(error)
      response.status(400).json({ "error": error })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.ciudadesService.remove(+id);
    } catch (error) {
      console.log(error)
      response.status(400).json({ "error": error })
    }
  }
}
