import { Controller, Get, Post, Put, Query, Body } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDTO } from './dto/createServiceDTO';

@Controller('service')
export class ServiceController {
  constructor(private readonly _serviceService: ServiceService) {}

  @Get()
  getOne(@Query() query) {
    const { id } = query;
    return this._serviceService.getOne(id);
  }

  @Get("/all/empresa")
  getAllUser(@Query() query){
    const { id }  = query;
    return this._serviceService.getAllUser(id);
  }

  @Get('/all')
  getAll() {
    return this._serviceService.getAll();
  }

  @Get('/types')
  getTypes() {
    return this._serviceService.getTypes();
  }

  @Post('/create')
  createService(@Body() body: CreateServiceDTO) {
    return this._serviceService.createService(body);
  }

  @Put()
  updateService() {}
}
