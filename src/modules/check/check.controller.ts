import { Controller, Get, Post, Put } from '@nestjs/common';
import { CheckService } from './check.service';

@Controller('check')
export class CheckController {
    constructor(
        private readonly _checkService: CheckService
    ){}

    @Get()
    getOne(){

    }

    @Get("/all")
    getAll(){

    }
    
    @Post("/create")
    createCheck(){

    }

    @Put("/update")
    updateCheck(){
        
    }

}
