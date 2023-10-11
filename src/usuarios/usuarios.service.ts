import {
  GoneException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { throws } from 'assert';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      createUsuarioDto.contrasena = await bcrypt.hash(
        createUsuarioDto.contrasena,
        10,
      );
      return this.usuarioRepository.save(createUsuarioDto);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<Array<Usuario>> {
    return this.usuarioRepository.find();
  }

  async findOne(correo: string): Promise<Usuario> {
    return this.usuarioRepository.findOneByOrFail({ correo });
  }

  async update(
    correo: string,
    updateusuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuarioToUpdate = await this.findOne(correo);
    Object.assign(usuarioToUpdate, updateusuarioDto);
    return this.usuarioRepository.save(usuarioToUpdate);
  }

  async remove(correo: string): Promise<Usuario> {
    const usuarioToRemove: Usuario = await this.findOne(correo);
    return this.usuarioRepository.remove(usuarioToRemove);
  }
}
