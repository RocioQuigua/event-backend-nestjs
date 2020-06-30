import {
  Injectable,
  NotFoundException,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities/user.entity';
import { Repository } from 'typeorm';
import { Login } from 'modules/auth/dto/login.dto';
import { Profile } from 'entities/profile.entity';
import { Role } from 'entities/role.entity';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '@common/strategies/jwt.strategy';
import { Register } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly _profileRepository: Repository<Profile>,
    @Inject('BcryptService')
    private readonly _bcryptService,
    private readonly _jwtService: JwtService,
    @InjectRepository(Role)
    private readonly _roleRepository: Repository<Role>,
  ) {}

  async userExists(username: string, email: string) {
    const userNameExist = await this._userRepository.findOne({
      where: { username },
    });

    const EmailExist = await this._userRepository.findOne({
      where: { email },
    });

    return {
      username: !!userNameExist,
      email: EmailExist,
    };
  }

  tokenStructure(user: any) {
    const { id, email, username, role } = user;
    const payload: IJwtPayload = {
      id,
      email,
      username,
      role,
    };
    return payload;
  }

  async Login(body: Login) {
    const { username, password } = body;

    const user = await this._userRepository.findOne({
      where: { username },
      relations: ['role'],
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const result = await this._bcryptService.validatePassword(
      password,
      user.password,
    );
    const payload = this.tokenStructure(user);
    const token = this._jwtService.sign(payload);

    return {
      token,
      status: result,
    };
  }

  async Register(body: Register, role: String) {
    const {
      firstName,
      secondName,
      firstSurname,
      secondSurname,
      username,
      email,
      password,
    } = body;

    const existe = await this.userExists(username, email);
     if (existe.username || existe.email) {
      throw new BadRequestException('Ups, El usuario ya existe');
    }
    const user = new User();
    const profile = this._profileRepository.create();

    user.username = username;
    user.email = email;
    user.password = await this._bcryptService.encryptPassword(password);

    user.role = await this._roleRepository.findOne({
      where: {
        name: role,
      },
    });

    user.profile = profile;
    profile.firstName = firstName;
    profile.secondName = secondName;
    profile.firstSurname = firstSurname;
    profile.secondSurname = secondSurname;
    await this._userRepository.save(user);
    return {
      status: true,
    };
  }
}
