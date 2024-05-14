import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import typeorm from '../../../config/database/orm.config';
import ALL_ENTITIES from 'schemas/sql';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [typeorm],
      envFilePath: '.env',
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => configService.get('typeorm')
    }),
    TypeOrmModule.forFeature(ALL_ENTITIES),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
