import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const cors = configService.get('CORS') === 'true';
  if (cors) {
    app.enableCors();
  }

  const configSwagger = new DocumentBuilder()
    .setTitle('Microservice request')
    .setDescription('Swagger for ms-vcp-request API')
    .setVersion('1.0')
    .addTag('providers')

    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(configService.get('PORT'));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
