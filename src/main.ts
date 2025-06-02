import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.useStaticAssets(join(__dirname, '..', 'public')); // Static assets: css, images, js
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // Views directory for EJS templates
  app.setViewEngine('ejs');

  await app.listen(configService.get<string>("PORT"));
}
bootstrap();
