import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import corsOptions from './config/corsConfig';
import { ValidationPipe } from '@nestjs/common';

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

  app.enableCors(corsOptions as CorsOptions)

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true

  }))

  await app.listen(3000);

}

bootstrap();
