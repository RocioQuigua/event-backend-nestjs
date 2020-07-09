import { Controller, Get, Query, Post, Body, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { EventCreateDTO } from './dto/event-create.dto';

@Controller('event')
export class EventController {
  constructor(private readonly _eventService: EventService) {}

  @Get()
  getOne(@Query() query) {
    const { id } = query;
    return this._eventService.getOne(id);
  }

  @Get('/all')
  getAll() {
    return this._eventService.getAll();
  }

  @Post()
  createEvent(@Body() body: EventCreateDTO, @Query() query) {
    const { type, userId } = query;
    return this._eventService.createEvent(body, type, userId);
  }

  @Put()
  updateEvent(@Body() body: EventCreateDTO, @Query() query){
    const { id } = query;
    return this._eventService.updateEvent(body, id);
  }
}
