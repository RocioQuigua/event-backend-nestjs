import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'entities/user.entity';
import { Profile } from 'entities/profile.entity';
import { Role } from 'entities/role.entity';
import { JwtModule } from '@nestjs/jwt';
import { InstanceConfigService } from '@common/config/config.service';
import { jwt } from '@common/constants/constants';
import { JwtStrategy } from '@common/strategies/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, User, Role]), JwtModule.register({
    secret: InstanceConfigService.get(jwt.JWT_SECRET),
    signOptions: { expiresIn: "7days" },
  }),],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
