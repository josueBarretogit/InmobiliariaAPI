import { Injectable } from '@nestjs/common';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';

@Injectable()
export class InmueblesService {

  async create(createInmuebleDto: CreateInmuebleDto) {
    return 'This action adds a new inmueble';
  }

  async findAll() {
    return `This action returns all inmuebles`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} inmueble`;
  }

  async update(id: number, updateInmuebleDto: UpdateInmuebleDto) {
    return `This action updates a #${id} inmueble`;
  }

  async remove(id: number) {
    return `This action removes a #${id} inmueble`;
  }
}
