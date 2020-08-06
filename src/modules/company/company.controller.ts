import { Controller, Get, Put, Body, Post } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(
        private readonly _companyService: CompanyService
    ){}

    @Get("")
    getCompany(){
        return this._companyService.getCompany();
    }

    @Post("/update")
    updateCompany(@Body() body){
        return this._companyService.updateCompany(body);
    }
}
