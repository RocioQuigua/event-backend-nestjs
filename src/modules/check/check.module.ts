import { Module } from '@nestjs/common';
import { CheckController } from './check.controller';
import { CheckService } from './check.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Check } from 'entities/check.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Check])],
  controllers: [CheckController],
  providers: [CheckService]
})
export class CheckModule {}
