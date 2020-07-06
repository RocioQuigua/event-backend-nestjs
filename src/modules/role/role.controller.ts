import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { RoleService } from './role.service';
import { query } from 'express';

@Controller('role')
export class RoleController {
    constructor(
        private readonly _roleService: RoleService
    ){}

    @Get()
    getOne(@Query() query){ 
        const { id } = query;
        return this._roleService.getOne(id);
    }

    @Get("/all")
    getAll(){
        return this._roleService.getAll();
    }
    
    @Post()
    createRole(@Body() body){
        return this._roleService.createRole(body);
    }

    @Put()
    updateRole(@Query() query, @Body() body){
        const { id } = query;
        return this._roleService.updateRole(id, body);
    }

}
