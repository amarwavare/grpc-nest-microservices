import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Get('getHello')
  async getHello (): Promise<any> {
    return await this.authenticationService.getHello();
  }
}
