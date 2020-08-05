import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service, TypeService } from 'entities/service.entity';
import { User } from 'entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, User, TypeService])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}
