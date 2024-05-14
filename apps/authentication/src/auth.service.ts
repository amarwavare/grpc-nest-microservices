import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getHello() {    
    return { message: 'Greetings from Auth GRPC microservices' };
  }
}
