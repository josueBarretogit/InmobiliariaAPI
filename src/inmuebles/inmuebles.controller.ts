import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Next } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { NextFunction, Request, Response } from 'express';

@Controller('inmuebles')
export class InmueblesController {
  constructor(private readonly inmueblesService: InmueblesService) { }

  @Post()
  async create(@Body() createInmuebleDto: CreateInmuebleDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    response.status(400).json({})
    return this.inmueblesService.create(createInmuebleDto);
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    response.status(400).json({})
    return this.inmueblesService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    response.status(400).json({})
    return this.inmueblesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInmuebleDto: UpdateInmuebleDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    response.status(400).json({})
    return this.inmueblesService.update(+id, updateInmuebleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    response.status(400).json({})
    return this.inmueblesService.remove(+id);
  }
}
