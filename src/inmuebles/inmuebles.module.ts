import { Module } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { InmueblesController } from './inmuebles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inmueble } from './entities/inmueble.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inmueble])],
  controllers: [InmueblesController],
  providers: [InmueblesService],
})
export class InmueblesModule { }
