import { Controller, Get, Post, Put } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly _serviceService: ServiceService) {}

  @Get()
  getOne() {}

  @Get()
  getAll() {}

  @Post()
  createService() {}
  
  @Put()
  updateService() {}
}
