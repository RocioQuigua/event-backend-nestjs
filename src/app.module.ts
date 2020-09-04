import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '@common/common.module';
import { AuthModule } from 'modules/auth/auth.module';
import { RoleModule } from 'modules/role/role.module';
import { UserModule } from 'modules/user/user.module';
import { EventModule } from 'modules/event/event.module';
import { ServiceModule } from 'modules/service/service.module';
import { CompanyModule } from 'modules/company/company.module';
import { PermissionsModule } from 'modules/permissions/permissions.module';
import { EventServiceModule } from 'modules/event-service/event-service.module';
import service from './@common/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: service.get('DB_HOST'),
      port: +service.get('DB_PORT'),
      username: service.get('DB_USERNAME'),
      password: service.get('DB_PASSWORD'),
      database: service.get('DB_DATABASE'),
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CommonModule,
    AuthModule,
    RoleModule,
    ServiceModule,
    CompanyModule,
    UserModule,
    EventModule,
    PermissionsModule,
    EventServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
