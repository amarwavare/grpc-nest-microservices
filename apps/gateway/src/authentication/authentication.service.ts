import { Injectable } from '@nestjs/common';
import { AuthenticationGrpcService } from '../grpc-microservice/authentication/authentication.service';

@Injectable()
export class AuthenticationService {
  constructor(public authenticationService: AuthenticationGrpcService) {}
  async getHello(): Promise<any> {
    return await this.authenticationService.getHello().then(res => res.message).catch(error => error);
  }
}
