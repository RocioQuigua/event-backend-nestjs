import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EventService } from 'entities/event_service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDTO } from './dto/createEventService.dto';
import { Service } from 'entities/service.entity';
import { Event } from 'entities/event.entity';
import { state } from '@common/constants/constants';

@Injectable()
export class EventServiceService {
  constructor(
    @InjectRepository(EventService)
    private readonly _eventServicioRepository: Repository<EventService>,
    @InjectRepository(Service)
    private readonly _serviceRepository: Repository<Service>,
    @InjectRepository(Event)
    private readonly _eventRepository: Repository<Event>,
  ) {}

  async create(body: CreateDTO) {
    const { event, service } = body;

    const exists = await this._eventServicioRepository
      .createQueryBuilder('eventService')
      .leftJoinAndSelect('eventService.event', 'event')
      .leftJoinAndSelect('eventService.service', 'service')
      .where('event.id =:id  AND service.id =:idService', {
        id: event,
        idService: service,
      })
      .getOne();

    if (exists) {
      throw new NotFoundException('Ya existe el registro');
    }

    const eventService = new EventService();
    eventService.service = await this._serviceRepository.findOne(service);
    eventService.event = await this._eventRepository.findOne(event);
    const result = await this._eventServicioRepository.save(eventService);
    return {
      result: result.id,
      status: true,
    };
  }


  async allEvent(idUser: number){
       const events = this._eventServicioRepository
      .createQueryBuilder("eventService")
      .leftJoinAndSelect("eventService.event", "event")
      .leftJoinAndSelect("eventService.service", "service")
      .leftJoinAndSelect("service.empresa", "empresa")
      .where("empresa.id = :id", {id: idUser})
      .getMany();
      return events;
  }

  async changeState(id: number){
    const result = await this._eventServicioRepository.update(id, { state: state.ASIGNADO});
    return {
      status: true
    }
  }


  async delete(id: number) {
    const exists = await this._eventServicioRepository.findOne(id);

    if (exists.state === state.ASIGNADO) {
      throw new NotFoundException('El servicio esta asignado');
    }

    await this._eventServicioRepository.delete(id);
    return {
      status: true,
    };
  }

  async all(idEvent) {
    const result = await this._eventServicioRepository
      .createQueryBuilder('eventServicio')
      .leftJoin('eventServicio.event', 'event')
      .leftJoinAndSelect('eventServicio.service', 'service')
      .leftJoinAndSelect('service.empresa', 'empresa')
      .leftJoinAndSelect('empresa.profile', 'profile')
      .where('event.id = :id', { id: idEvent })
      .getMany();

    return {
      status: true,
      result,
    };
  }
}
