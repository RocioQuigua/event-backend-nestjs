import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '@common/common.module';
import { AuthModule } from 'modules/auth/auth.module';
import { RoleModule } from 'modules/role/role.module';
import { UserModule } from 'modules/user/user.module';
import { EventModule } from 'modules/event/event.module';
import { ProductModule } from 'modules/product/product.module';
import { ServiceModule } from 'modules/service/service.module';
import { CheckModule } from 'modules/check/check.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CommonModule, AuthModule,CheckModule, RoleModule, UserModule,ServiceModule, EventModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
