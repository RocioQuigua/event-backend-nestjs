import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Login } from './dto/login.dto';
import { Register } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly _authService: AuthService
    ){}

    @Post("/login")
    Login(@Body() body: Login){
        return this._authService.Login(body);
    }   

    @Post("/register")
    Register(@Body() body: Register){
        return this._authService.Register(body);
    }

}
