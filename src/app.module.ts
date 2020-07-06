import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '@common/common.module';
import { AuthModule } from 'modules/auth/auth.module';
import { RoleModule } from 'modules/role/role.module';
import { UserModule } from 'modules/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CommonModule, AuthModule, RoleModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
