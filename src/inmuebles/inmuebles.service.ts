import { Injectable } from '@nestjs/common';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { DataSource, DeepPartial, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Inmueble } from './entities/inmueble.entity';

@Injectable()
export class InmueblesService {

  // private readonly relations: {
  //   relations: {
  //     asesor: true,
  //     ciudad: true
  //   }
  // }

  constructor(@InjectRepository(Inmueble) private readonly inmuebleRepository: Repository<Inmueble>) { }

  async create(createInmuebleDto: CreateInmuebleDto | Inmueble): Promise<Inmueble> {
    return this.inmuebleRepository.save(createInmuebleDto)
  }

  async findAll(): Promise<Array<Inmueble>> {
    return this.inmuebleRepository.find()
  }

  async findOne(id: number): Promise<Inmueble> {
    return this.inmuebleRepository.findOneByOrFail({ id: id })
  }

  async update(id: number, updateInmuebleDto: UpdateInmuebleDto): Promise<Inmueble> {
    const inmuebleToUpdate = await this.findOne(id)
    Object.assign(inmuebleToUpdate, updateInmuebleDto)
    return this.inmuebleRepository.save(inmuebleToUpdate)
  }

  async remove(id: number): Promise<Inmueble> {
    const inmuebleToRemove: Inmueble = await this.findOne(id)
    return this.inmuebleRepository.remove(inmuebleToRemove)
  }

}
