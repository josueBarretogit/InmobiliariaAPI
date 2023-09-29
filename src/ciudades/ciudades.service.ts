import { Injectable } from '@nestjs/common';
import { CreateCiudadeDto } from './dto/create-ciudade.dto';
import { UpdateCiudadeDto } from './dto/update-ciudade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudades.entity';

@Injectable()
export class CiudadesService {

  // private readonly relations: {
  //   relations: {
  //     asesor: true,
  //     ciudad: true
  //   }
  // }

  constructor(@InjectRepository(Ciudad) private readonly ciudadRepository: Repository<Ciudad>) { }

  async create(createCiudadDto: CreateCiudadeDto): Promise<Ciudad> {
    return this.ciudadRepository.save(createCiudadDto)
  }

  async findAll(): Promise<Array<Ciudad>> {
    return this.ciudadRepository.find()
  }

  async findOne(id: number): Promise<Ciudad> {
    return this.ciudadRepository.findOneBy({ id })
  }

  async update(id: number, updateCiudadDto: UpdateCiudadeDto): Promise<Ciudad> {
    const ciudadToUpdate = await this.findOne(id)
    Object.assign(ciudadToUpdate, updateCiudadDto)
    return this.ciudadRepository.save(ciudadToUpdate)
  }

  async remove(id: number): Promise<Ciudad> {
    const ciudadToRemove: Ciudad = await this.findOne(id)
    return this.ciudadRepository.remove(ciudadToRemove)
  }

}
