import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from './dto/login-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //todo Register
  @Post('register') 
  registerUser(@Body() userObject: RegisterAuthDto) {//?@Body() almacenamos el contenido de ese body en una variable...
    return this.authService.register(userObject);
  }

  //todo Login
  @Post('login')
  loginUser(@Body() userObjectLogin: LoginAuthDto) {
    return this.authService.login(userObjectLogin);
  }

  @Get('profile')
  profile() {
    return 'profile';
  }

} 
