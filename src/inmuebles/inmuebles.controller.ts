import { Controller, HttpStatus, Get, Post, Body, Patch, Param, Delete, Req, Res, Next } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { NextFunction, Request, Response } from 'express';

@Controller('inmuebles')
export class InmueblesController {

  constructor(private readonly inmueblesService: InmueblesService) { }

  @Post()
  async create(@Body() createInmuebleDto: CreateInmuebleDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(HttpStatus.CREATED).json({})
      return this.inmueblesService.create(createInmuebleDto);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }

  @Get()
  async findAll(@Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(HttpStatus.OK).json({})
      return this.inmueblesService.findAll();
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }


  @Get(':id')
  async findOne(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(HttpStatus.FOUND).json({})
      return this.inmueblesService.findOne(+id);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInmuebleDto: UpdateInmuebleDto, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(HttpStatus.RESET_CONTENT).json({})
      return this.inmueblesService.update(+id, updateInmuebleDto);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.BAD_REQUEST).json({ "error": error })
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() response: Response, @Next() next: NextFunction): Promise<string> {
    try {
      response.status(HttpStatus.RESET_CONTENT).json({})
      return this.inmueblesService.remove(+id);
    } catch (error) {
      console.log(error)
      response.status(HttpStatus.CREATED).json({ "error": error })
    }
  }

}
