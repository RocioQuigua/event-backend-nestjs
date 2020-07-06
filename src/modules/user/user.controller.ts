import { Controller, Get, Query, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateProfile } from './dto/update-profile.dto';

@Controller('user')
export class UserController {

    constructor(
        private readonly _userService: UserService
    ){}

    @Get("/profile")
    getProfile(@Query() query){
        const { id } = query;
        return this._userService.getProfile(id);
    }

    @Post("/update-profile")
    updateProfile(@Query() query ,@Body() body: UpdateProfile){
        const { id } = query;
         return this._userService.updateProfile(id, body);
    }
    
}
