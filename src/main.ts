import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const port = process.env.PORT || config.get('server.port');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  logger.verbose(`App is listening port: ${port}`);
}

bootstrap();
