import { Injectable } from '@nestjs/common';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { DataSource, FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Inmueble } from './entities/inmueble.entity';

@Injectable()
export class InmueblesService {

  private readonly relations: {
    relations: {
      asesor: true,
      ciudad: true
    }
  }
  constructor(@InjectRepository(Inmueble) private readonly inmuebleRepository: Repository<Inmueble>) { }

  async create(createInmuebleDto: CreateInmuebleDto): Promise<Inmueble> {
    return this.inmuebleRepository.save(createInmuebleDto)
  }

  async findAll(): Promise<Array<Inmueble>> {
    return this.inmuebleRepository.find(this.relations)
  }

  async findOne(id: number): Promise<Inmueble> {
    return this.inmuebleRepository.findOneBy({ id: id })


  }

  async update(id: number, updateInmuebleDto: UpdateInmuebleDto): Promise<void> {
    return `This action updates a #${id} inmueble`;
  }

  async remove(id: number): Promise<Inmueble> {
  }
}
