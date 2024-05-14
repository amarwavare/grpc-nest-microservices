import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';

interface IOptions {
  url: string;
}

export const gRPCMicroserviceOptions = (
  options: IOptions,
): MicroserviceOptions & NestMicroserviceOptions => ({
  transport: Transport.GRPC,
  options: {
    protoPath: join(__dirname, '../authentication.proto'),
    package: 'authenticationPackage',
    url: options.url,
  },
});
