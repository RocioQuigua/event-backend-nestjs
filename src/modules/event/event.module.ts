import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'entities/event.entity';
import { User } from 'entities/user.entity';
import { TypeEvent } from 'entities/typeEvent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User, TypeEvent])],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
