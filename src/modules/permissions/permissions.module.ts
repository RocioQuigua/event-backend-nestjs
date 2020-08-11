import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu, Permissions } from 'entities/permissions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, Permissions])],
  controllers: [PermissionsController],
  providers: [PermissionsService]
})
export class PermissionsModule {}
