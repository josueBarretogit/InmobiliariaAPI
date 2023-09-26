import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InmueblesModule } from './inmuebles/inmuebles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inmueble } from './inmuebles/entities/inmueble.entity';

@Module({
  imports: [InmueblesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'inmobiliariaapi',
      entities: [Inmueble],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
