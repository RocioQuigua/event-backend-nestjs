import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'entities/event.entity';
import { Repository } from 'typeorm';
import { EventCreateDTO } from './dto/event-create.dto';
import { TypeEvent } from 'entities/typeEvent.entity';
import { User } from 'entities/user.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly _eventRepository: Repository<Event>,
    @InjectRepository(TypeEvent)
    private readonly _typeEventRepository: Repository<TypeEvent>,
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}

  async getOne(id: number) {
    const event = await this._eventRepository.findOne(id, {
      relations: ['typeEvent'],
    });
    if(!event){
      throw new NotFoundException("El evento no existe")
    }
    return event;
  }

  async getAll() {
    const events = await this._eventRepository.find({
      relations: ['typeEvent'],
    });
    return events;
  }

  async createEvent(body: EventCreateDTO, type: number, userId: number) {
    const event = new Event();

    event.description = body.description;
    event.participants = body.participants;
    event.typeEvent = await this._typeEventRepository.findOne({
      where: {
        id: type,
      },
    });
    event.user = await this._userRepository.findOne({
      where: {
        id: userId,
      },
    });

    await this._eventRepository.save(event);
    return {
      status: true,
    };
  }

  async updateEvent(body: EventCreateDTO, id: number){
    await this.getOne(id);
    await this._eventRepository.update(id, body);
    return {
      status: true
    }
  }
}
