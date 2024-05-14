import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}
  getHello() {
    return 'Welcome to gRPC NestJs Microservices &#128512;';
  }
}
