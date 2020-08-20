import { Controller, Post, Body } from '@nestjs/common';
import { CreateDTO } from './dto/createEventService.dto';
import { EventServiceService } from './event-service.service';

@Controller('event-service')
export class EventServiceController {
  constructor(private readonly _service: EventServiceService) {}

  @Post('/create')
  create(@Body() body: CreateDTO) {
    return this.create(body);
  }
}
