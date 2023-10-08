import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InmueblesModule } from './inmuebles/inmuebles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inmueble } from './inmuebles/entities/inmueble.entity';
import { AsesoresModule } from './asesores/asesores.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { CiudadesController } from './ciudades/ciudades.controller';
import { AsesoresController } from './asesores/asesores.controller';
import { InmueblesController } from './inmuebles/inmuebles.controller';
import { CiudadesService } from './ciudades/ciudades.service';
import { InmueblesService } from './inmuebles/inmuebles.service';
import { AsesoresService } from './asesores/asesores.service';
import { createMap } from '@automapper/core';
import { mapper } from './automapper/automapper';
import { CreateInmuebleDto } from './inmuebles/dto/create-inmueble.dto';
import { VerifyMiddleware } from './middleware/verify.middleware';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosService } from './usuarios/usuarios.service';

createMap(mapper, CreateInmuebleDto, Inmueble);

@Module({
  imports: [
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
    InmueblesModule,
    AsesoresModule,
    CiudadesModule,
    UsuariosModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    CiudadesController,
    AsesoresController,
    InmueblesController,
  ],
  providers: [
    AppService,
    CiudadesService,
    InmueblesService,
    AsesoresService,
    UsuariosService,
  ],
})
export class AppModule {}
