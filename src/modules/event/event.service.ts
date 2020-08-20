import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'entities/event.entity';
import { Repository } from 'typeorm';
import { EventCreateDTO } from './dto/event-create.dto';
import { TypeEvent } from 'entities/typeEvent.entity';
import { User } from 'entities/user.entity';
import { EventUploadDTO } from './dto/event-upload.dto';

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
    if (!event) {
      throw new NotFoundException('El evento no existe');
    }
    return event;
  }

  async getAll() {
    const events = await this._eventRepository.find({
      relations: ['typeEvent'],
    });
    return events;
  }

  async getAllUser(idUser) {
    const events = await this._eventRepository.find({
      where: { user: { id: idUser } },
    });
    return events;
  }

  async getTypes() {
    const types = await this._typeEventRepository.find();
    return types;
  }

  async uploadEvent(body: EventUploadDTO) {
    const {
      description,
      participants,
      startDate,
      duration,
      type,
      name,
      id,
    } = body;
    const event = new Event();
    event.name = name;
    event.description = description;
    event.participants = participants;
    event.startDate = startDate;
    event.duration = duration;
    event.typeEvent = await this._typeEventRepository.findOne({
      where: { id: type },
    });

    const result = await this._eventRepository.update(id, event);
    return {
      status: true,
      result,
    };
  }

  async createEvent(body: EventCreateDTO) {
    const {
      description,
      participants,
      startDate,
      duration,
      type,
      user,
      name,
    } = body;
    const event = new Event();
    event.description = description;
    event.participants = participants;
    event.startDate = startDate;
    event.duration = duration;
    event.name = name;
    event.typeEvent = await this._typeEventRepository.findOne({
      where: { id: type },
    });
    event.user = await this._userRepository.findOne({
      where: {
        id: user,
      },
    });

    await this._eventRepository.save(event);
    return {
      status: true,
    };
  }
}
