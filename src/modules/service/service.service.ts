import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from 'entities/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private readonly _serviceRepository: Repository<Service>
    ){}

    async getOne(){

    }
    async getAll(){

    }
    async createService(){

    }
    async updateService(){
        
    }
}
