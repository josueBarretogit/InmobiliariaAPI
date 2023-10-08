import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuariosService } from './usuarios.service';
import { Request, Response } from 'express';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}

  @Post('createUsuario')
  async create(
    @Body() createUsuarioDto: CreateUsuarioDto,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Usuario | undefined> {
    try {
      const usuarioToCreate =
        await this.usuarioService.create(createUsuarioDto);

      response.status(HttpStatus.CREATED).json({ usuarioToCreate });
      return usuarioToCreate;
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error });
      return;
    }
  }

  @Get()
  async findAll(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Usuario[] | undefined> {
    try {
      const usuarios = await this.usuarioService.findAll();
      response.status(HttpStatus.CREATED).json({ usuarios });
      return usuarios;
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error });
      return;
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Usuario | undefined> {
    try {
      const usuario = await this.usuarioService.findOne(id);
      response.status(HttpStatus.OK).json({ usuario });
      return usuario;
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error });
      return;
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Usuario | undefined> {
    try {
      const usuarioToUpdate = await this.usuarioService.update(
        id,
        updateUsuarioDto,
      );

      response.status(HttpStatus.OK).json({ usuarioToUpdate });
      return usuarioToUpdate;
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ response: 'ejecutado' });
      return;
    }
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Usuario | undefined> {
    try {
      const usuarioToRemove = await this.usuarioService.remove(id);
      response.status(HttpStatus.CREATED).json({ usuarioToRemove });
      return usuarioToRemove;
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json({ error });
      return;
    }
  }
}
