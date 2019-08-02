import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post("login")
    login(@Body() loginUserDto: LoginUserDto) {
      console.log(loginUserDto);
      
      return this.authService.signIn(loginUserDto);
    }
}
