import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('authenticationService', 'getHello')
  getHello() {
    return this.authService.getHello();
  }
}
