import {
  Controller,
  HttpStatus,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { Request, Response } from 'express';
import { Inmueble } from './entities/inmueble.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CiudadesService } from 'src/ciudades/ciudades.service';
import { mapper } from 'src/automapper/automapper';
import { AsesoresService } from 'src/asesores/asesores.service';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Inmuebles')
@Controller('inmuebles')
export class InmueblesController {
  constructor(
    private readonly inmueblesService: InmueblesService,
    private readonly ciudadService: CiudadesService,
    private readonly asesorService: AsesoresService,
  ) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post('/create')
  async create(
    @Body() createInmuebleDto: CreateInmuebleDto,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Inmueble | undefined> {
    try {
      const ciudadRelatedToInmueble = await this.ciudadService.findOne(
        createInmuebleDto.ciudadId,
      );
      const asesorRelatedToInmueble = await this.asesorService.findOne(
        createInmuebleDto.asesorId,
      );

      const inmuebleToCreate = mapper.map(
        createInmuebleDto,
        CreateInmuebleDto,
        Inmueble,
      );

      inmuebleToCreate.ciudad = ciudadRelatedToInmueble;
      inmuebleToCreate.asesor = asesorRelatedToInmueble;

      const inmuebleCreated: Inmueble =
        await this.inmueblesService.create(inmuebleToCreate);

      response
        .status(HttpStatus.CREATED)
        .json({ response: 'Inmueble creado', datos: inmuebleCreated });
      return;
    } catch (error) {
      console.log(error);
      response.status(HttpStatus.BAD_REQUEST).json({ error: error });
    }
  }

  @Get()
  async findAll(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Inmueble[] | undefined> {
    try {
      const inmuebles = await this.inmueblesService.findAll();
      response.status(HttpStatus.OK).json({ inmuebles: inmuebles });
      return;
    } catch (error) {
      console.log(error);
      response.status(HttpStatus.BAD_REQUEST).json({ error: error });
    }
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Inmueble | undefined> {
    try {
      const inmueble = await this.inmueblesService.findOne(id);
      response.status(HttpStatus.OK).json({ inmueble: inmueble });
      return;
    } catch (error) {
      console.log(error);
      response.status(HttpStatus.BAD_REQUEST).json({ error: error });
    }
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateInmuebleDto: UpdateInmuebleDto,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Inmueble | undefined> {
    try {
      const updatedInmueble = await this.inmueblesService.update(
        id,
        updateInmuebleDto,
      );
      response
        .status(HttpStatus.RESET_CONTENT)
        .json({ updatedInmueble: updatedInmueble });
      return;
    } catch (error) {
      console.log(error);
      response.status(HttpStatus.BAD_REQUEST).json({ error: error });
    }
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Inmueble | undefined> {
    try {
      const deletedInmueble = await this.inmueblesService.remove(id);
      response
        .status(HttpStatus.RESET_CONTENT)
        .json({ deletedInmueble: deletedInmueble });
      return;
    } catch (error) {
      console.log(error);
      response.status(HttpStatus.CREATED).json({ error: error });
    }
  }
}
