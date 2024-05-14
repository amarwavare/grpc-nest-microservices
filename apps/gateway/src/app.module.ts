import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      cache: true,
    }),
    AuthenticationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
