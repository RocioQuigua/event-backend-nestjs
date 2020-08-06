import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'entities/company.entity';
import { CompanyController } from './company.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Company])],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
