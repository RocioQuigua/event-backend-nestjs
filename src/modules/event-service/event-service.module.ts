import { Module } from '@nestjs/common';
import { EventServiceController } from './event-service.controller';
import { EventServiceService } from './event-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'entities/event.entity';
import { EventService } from 'entities/event_service.entity';
import { Service } from 'entities/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, EventService, Service])],
  controllers: [EventServiceController],
  providers: [EventServiceService]
})
export class EventServiceModule {}
