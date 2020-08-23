import { Controller, Get, Query, Post, Body, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { EventCreateDTO } from './dto/event-create.dto';
import { TypeEventDTO } from './dto/type-event.dto';

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

  @Post('/upload')
  getUpload(@Body() body) {
    return this._eventService.uploadEvent(body);
  }

  @Post('/type/create')
  createType(@Body() body: TypeEventDTO) {
    return this._eventService.createType(body);
  }

  @Get('/all/user')
  getAllUser(@Query() query) {
    const { idUser } = query;
    return this._eventService.getAllUser(idUser);
  }

  @Get('/types')
  getTypes() {
    return this._eventService.getTypes();
  }

  @Post('/create')
  createEvent(@Body() body: EventCreateDTO) {
    return this._eventService.createEvent(body);
  }
}
