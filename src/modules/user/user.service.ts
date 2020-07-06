import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities/user.entity';
import { Repository } from 'typeorm';
import { Profile } from 'entities/profile.entity';
import { state } from '@common/constants/constants';
import { UpdateProfile } from './dto/update-profile.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly _profileRepository: Repository<Profile>,
  ) {}

  async getProfile(id: number) {
    const profile = await this._profileRepository
      .createQueryBuilder('profile')
      .innerJoin('profile.user', 'user')
      .where('user.id = :id AND user.state = :state', {
        id,
        state: state.ACTIVE,
      })
      .getOne();
    return profile;
  }

  async updateProfile(id: number, body: UpdateProfile) {
    const user = await this._userRepository.findOne(id, {
      where: { state: state.ACTIVE }, relations: ["profile"]
    });
    if (!user) {
      throw new NotFoundException('El usuario no existe');
    }
    for (const key in body) {
      user.profile[key] = body[key];
    }
    await this._userRepository.save(user);
    return {
      update: true,
      state: true,
    };
  }

  async changePassword() {}
}
