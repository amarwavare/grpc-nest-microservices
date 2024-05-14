import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

interface IAuthGrpcService {
  getHello({}): Observable<any>;
}

@Injectable()
export class AuthenticationGrpcService implements OnModuleInit {
  constructor(
    @Inject('authenticationPackage') public authenticationClient: ClientGrpc,
  ) {}
  public authGrpcService: IAuthGrpcService;
  onModuleInit() {
    this.authGrpcService =
      this.authenticationClient.getService<IAuthGrpcService>(
        'authenticationService',
      );
  }

  public async getHello(): Promise<any> {
    return await lastValueFrom(this.authGrpcService.getHello({}));
  }
}
