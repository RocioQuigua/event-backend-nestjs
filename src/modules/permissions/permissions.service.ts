import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Menu, Permissions } from 'entities/permissions.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
    @InjectRepository(Permissions)
    private readonly permissionsRepository: Repository<Permissions>,
  ) {}

  async getAll() {
    //const menu = await this.permissionsRepository.find();
    const menu = await this.permissionsRepository.
    createQueryBuilder("permissions")
    .leftJoinAndSelect("permissions.menu", "menu") 
    .leftJoinAndSelect("permissions.role", "role")
    .leftJoinAndSelect("menu.submenu", "submenu")
    .getMany();
    return menu;
  }

  async getAllRole(role: number) {
    const menu = await this.menuRepository.find({ where: { role } });
    return menu;
  }
 
}
