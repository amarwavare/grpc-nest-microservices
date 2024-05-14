import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { gRPCMicroserviceOptions } from './config/microservice.config';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    gRPCMicroserviceOptions({url: '0.0.0.0:8080',})
  )
  await app.listen();
}
bootstrap();
