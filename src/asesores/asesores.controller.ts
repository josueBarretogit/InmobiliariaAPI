import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Next } from '@nestjs/common';
import { AsesoresService } from './asesores.service';
import { CreateAsesoreDto } from './dto/create-asesore.dto';
import { UpdateAsesoreDto } from './dto/update-asesore.dto';

import { NextFunction, Request, Response } from 'express';

@Controller('asesores')
export class AsesoresController {

  constructor(private readonly asesoresService: AsesoresService) { }

  @Post()
  async create(@Body() createAsesoreDto: CreateAsesoreDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.asesoresService.create(createAsesoreDto);
    } catch (error) {
      console.log(error)
      response.status(400).json({})
    }
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.asesoresService.findAll();
    } catch (error) {
      console.log(error)
      response.status(400).json({})
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.asesoresService.findOne(+id);
    } catch (error) {
      console.log(error)
      response.status(400).json({})
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() upadteAsesoreDto: UpdateAsesoreDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.asesoresService.update(+id, upadteAsesoreDto);
    } catch (error) {
      console.log(error)
      response.status(400).json({})
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(400).json({})
      return this.asesoresService.remove(+id);
    } catch (error) {
      console.log(error)
      response.status(400).json({})
    }
  }

}
