import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthenticationGrpcService } from './authentication.service';

@Module({
  imports: [
    ClientsModule.register( [
        {
          name: 'authenticationPackage',
          transport: Transport.GRPC,
          options: {
            package: 'authenticationPackage',
            url: '172.20.48.1:8080',
            protoPath: join(__dirname, '../authentication.proto'),
          }
        }
      ]
    )
  ],
  providers: [AuthenticationGrpcService],
  exports: [AuthenticationGrpcService],
})
export class AuthenticationGrpcModule {}
