import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'entities/role.entity';
import { Repository } from 'typeorm';
import { CreateRoleDTO } from './dto/create-role.dto';

@Injectable()
export class RoleService {
    
    constructor(
        @InjectRepository(Role)
        private readonly _roleRepository: Repository<Role>
    ){}

    async getOne(id: number){
        const role = await this._roleRepository.findOne(id);
        if(!role){
            throw new NotFoundException("El rol no existe");
        }
        return role;
    }
    async getAll(){
        const roles = await this._roleRepository.find();
        return roles;
    }
    async createRole(body: CreateRoleDTO){
        await this._roleRepository.save(body);
        return {
            status: true
        }
    }

    async updateRole(id: number, body: CreateRoleDTO){
        await this.getOne(id);
        await this._roleRepository.update(id, body);
        return{
            status: true
        }
    }
}
