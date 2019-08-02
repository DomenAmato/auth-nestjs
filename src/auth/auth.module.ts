import { Module } from '@nestjs/common';
import { JwtModule, JwtService, JwtSecretRequestType } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
  
  imports: [
    PassportModule.register({property: 'user'}),
    JwtModule.register({
    /* Secret has precedance over keys */
      secret: 'A2k19g34L3!',
      signOptions: {
        expiresIn: 3600,
      },
    }),UsersModule],
  providers: [AuthService, JwtStrategy],
  exports:[AuthModule, AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
