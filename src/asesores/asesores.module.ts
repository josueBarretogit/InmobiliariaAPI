import { Module } from '@nestjs/common';
import { AsesoresService } from './asesores.service';
import { AsesoresController } from './asesores.controller';
import { Asesor } from './entities/asesores.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Asesor])],
  controllers: [AsesoresController],
  providers: [AsesoresService],
  exports: [TypeOrmModule]
})
export class AsesoresModule { }
