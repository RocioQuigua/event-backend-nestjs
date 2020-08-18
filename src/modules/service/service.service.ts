import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service, TypeService } from 'entities/service.entity';
import { Repository } from 'typeorm';
import { CreateServiceDTO } from './dto/createServiceDTO';
import { User } from 'entities/user.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly _serviceRepository: Repository<Service>,
    @InjectRepository(TypeService)
    private readonly _typeRepository: Repository<TypeService>,
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}

  async getOne(id: number) {
    const service = await this._serviceRepository.findOne(id);
    return service;
  }

  async getTypes() {
    const types = await this._typeRepository.find();
    return types;
  }

  async getAll() {
    const services = await this._serviceRepository.find();
    return services;
  }
  async createService(body: CreateServiceDTO) {
    const { description, title, prise, imagen, type, empresa } = body;
    const service = new Service();
    service.description = description;
    service.title = title;
    service.prise = prise;
    service.imagen = imagen;
    service.typeService = await this._typeRepository.findOne({
      where: { id: type },
    });
    service.empresa = await this._userRepository.findOne({
      where: { id: empresa },
    });
    await this._serviceRepository.save(service);
    return {
      status: true,
    };
  }
  async updateService() {}
}
