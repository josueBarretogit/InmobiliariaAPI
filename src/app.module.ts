import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InmueblesModule } from './inmuebles/inmuebles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inmueble } from './inmuebles/entities/inmueble.entity';
import { AsesoresModule } from './asesores/asesores.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { Asesor } from './asesores/entities/asesores.entity';
import { Ciudad } from './ciudades/entities/ciudades.entity';
import { CiudadesController } from './ciudades/ciudades.controller';
import { AsesoresController } from './asesores/asesores.controller';
import { InmueblesController } from './inmuebles/inmuebles.controller';
import { CiudadesService } from './ciudades/ciudades.service';
import { InmueblesService } from './inmuebles/inmuebles.service';
import { AsesoresService } from './asesores/asesores.service';

@Module({
  imports: [
    InmueblesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'inmobiliaria',
      synchronize: true,
      retryAttempts: 2,
      autoLoadEntities: true,
    }),
    AsesoresModule,
    CiudadesModule,],
  controllers: [AppController, CiudadesController, AsesoresController, InmueblesController],
  providers: [AppService, CiudadesService, InmueblesService, AsesoresService],
})

export class AppModule { }
