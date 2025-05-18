import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';

async function bootstrap() {
  const logger = new Logger('PRODUCTS-MS main');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: envs.HOST,
        port: envs.PORT
      }
    }
  );

  logger.log(`Microservicio de productos escuchando desde le puerto: ${envs.PORT}`);
  await app.listen();

}
bootstrap();
