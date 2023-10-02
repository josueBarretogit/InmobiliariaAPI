import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { createMap } from '@automapper/core';
import { mapper } from './automapper/automapper';
import { CreateInmuebleDto } from './inmuebles/dto/create-inmueble.dto';
import { Inmueble } from './inmuebles/entities/inmueble.entity';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('InmueblesAPI')
    .setDescription('Prueba inmuebles api')
    .setVersion('1.0')
    .addTag('Inmuebles')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  createMap(mapper, Inmueble, CreateInmuebleDto)

  await app.listen(3000);
}

bootstrap();
