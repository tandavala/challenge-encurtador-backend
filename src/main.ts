// testando agora

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Encurtador challenge Backend')
    .setDescription(
      `
   Challenge encurtador Backend é um desafio da wiser educação 
   a ideia é desenvolver uma API que irá receber como parâmetro 
   uma URL que deverá ser encurtada. A URL encurtada deve aceitar 
   o mínimo de 5 e o máximo de 10 caracteres e a URL deve apenas 
   conter letras minúsculas`,
    )
    .setVersion('1.0')
    .addTag('encurtador')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
