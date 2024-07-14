import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { envs } from './config/envs';

async function bootstrap() {

  const logger = new Logger('MicroServicios-CabeceraOrdenes')
  const app = await NestFactory.create(AppModule);

  await app.listen(envs.port);
  logger.log(`Microservicio corriendo en puerto: ${envs.port}`);

}
bootstrap();
