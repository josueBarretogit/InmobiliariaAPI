import { Module } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { InmueblesController } from './inmuebles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inmueble } from './entities/inmueble.entity';
import { CiudadesService } from 'src/ciudades/ciudades.service';
import { CiudadesController } from 'src/ciudades/ciudades.controller';
import { Ciudad } from 'src/ciudades/entities/ciudades.entity';
import { Asesor } from 'src/asesores/entities/asesores.entity';
import { AsesoresService } from 'src/asesores/asesores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inmueble]), TypeOrmModule.forFeature([Ciudad]), TypeOrmModule.forFeature([Asesor])],
  controllers: [InmueblesController, CiudadesController],
  providers: [InmueblesService, CiudadesService, AsesoresService],
  exports: [TypeOrmModule]
})
export class InmueblesModule { }
