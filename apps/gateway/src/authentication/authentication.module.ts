import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationGrpcModule } from '../grpc-microservice/authentication/authentication.module';

@Module({
  imports: [AuthenticationGrpcModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
