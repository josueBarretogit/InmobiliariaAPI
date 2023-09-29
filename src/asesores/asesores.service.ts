import { Injectable } from '@nestjs/common';
import { CreateAsesoreDto } from './dto/create-asesore.dto';
import { UpdateAsesoreDto } from './dto/update-asesore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asesor } from './entities/asesores.entity';

@Injectable()
export class AsesoresService {

  // private readonly relations: {
  //   relations: {
  //     asesor: true,
  //     ciudad: true
  //   }
  // }

  constructor(@InjectRepository(Asesor) private readonly asesorRepository: Repository<Asesor>) { }

  async create(createAsesorDto: CreateAsesoreDto): Promise<Asesor> {
    return this.asesorRepository.save(createAsesorDto)
  }

  async findAll(): Promise<Array<Asesor>> {
    return this.asesorRepository.find()
  }

  async findOne(id: number): Promise<Asesor> {
    return this.asesorRepository.findOneBy({ id })
  }

  async update(id: number, updateAsesorDto: UpdateAsesoreDto): Promise<Asesor> {
    const asesorToUpdate = await this.findOne(id)
    Object.assign(asesorToUpdate, updateAsesorDto)
    return this.asesorRepository.save(asesorToUpdate)
  }

  async remove(id: number): Promise<Asesor> {
    const asesorToRemove: Asesor = await this.findOne(id)
    return this.asesorRepository.remove(asesorToRemove)
  }

}
