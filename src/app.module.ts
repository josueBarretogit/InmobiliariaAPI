import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { createMap } from '@automapper/core';
import { mapper } from './automapper/automapper';
import { CreateInmuebleDto } from './inmuebles/dto/create-inmueble.dto';
import { VerifyMiddleware } from './middleware/verify.middleware';
import { AuthorizationModule } from './authorization/authorization.module';

createMap(mapper, CreateInmuebleDto, Inmueble)

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
    AuthorizationModule,],
  controllers: [AppController, CiudadesController, AsesoresController, InmueblesController],
  providers: [AppService, CiudadesService, InmueblesService, AsesoresService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyMiddleware)
      .exclude(
        { path: 'Inmuebles', method: RequestMethod.GET },
        { path: 'asesores', method: RequestMethod.GET },
        { path: 'ciudades', method: RequestMethod.GET },
      )
      .forRoutes(InmueblesController, AsesoresController, CiudadesController)

  }
}
