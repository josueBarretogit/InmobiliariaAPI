import { Module } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { InmueblesController } from './inmuebles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inmueble } from './entities/inmueble.entity';
import { CiudadesService } from 'src/ciudades/ciudades.service';
import { CiudadesController } from 'src/ciudades/ciudades.controller';
import { Ciudad } from 'src/ciudades/entities/ciudades.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inmueble]), TypeOrmModule.forFeature([Ciudad])],
  controllers: [InmueblesController, CiudadesController],
  providers: [InmueblesService, CiudadesService],
  exports: [TypeOrmModule]
})
export class InmueblesModule { }
