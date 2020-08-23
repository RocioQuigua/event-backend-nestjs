import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateDTO } from './dto/createEventService.dto';
import { EventServiceService } from './event-service.service';

@Controller('eventService')
export class EventServiceController {
  constructor(private readonly _service: EventServiceService) {}

  @Post('/create')
  create(@Body() body: CreateDTO) {
    return this._service.create(body);
  }

  @Post('/delete')
  delete(@Query() query) {
    const { id } = query;
    return this._service.delete(id);
  }

  @Get('/all')
  getAll(@Body() body) {
    const { idEvent } = body;
    return this._service.all(idEvent);
  }
}
