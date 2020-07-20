import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Check } from 'entities/check.entity';

@Injectable()
export class CheckService {
    constructor(
        @InjectRepository(Check)
        private readonly _checkRepository: Repository<Check>
    ){}

    async getOne(){

    }
    async getAll(){

    }
    async createCheck(){

    }
    async updateCheck(){
        
    }

}
