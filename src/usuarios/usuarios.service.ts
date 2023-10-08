import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  async findAll(): Promise<Array<Usuario>> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneByOrFail({ id });
  }

  async update(
    id: number,
    updateusuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuarioToUpdate = await this.findOne(id);
    Object.assign(usuarioToUpdate, updateusuarioDto);
    return this.usuarioRepository.save(usuarioToUpdate);
  }

  async remove(id: number): Promise<Usuario> {
    const usuarioToRemove: Usuario = await this.findOne(id);
    return this.usuarioRepository.remove(usuarioToRemove);
  }
}
