import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
 import { Repository } from "typeorm";
import { InstanceConfigService } from "@common/config/config.service";
import { jwt } from "@common/constants/constants";
import { User } from "entities/user.entity";

export interface IJwtPayload {
  id: number;
  username: string;
  email: string;
  role: [];
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: InstanceConfigService.get(jwt.JWT_SECRET),
      ignoreExpiration: false,
    });
  }

  async validate(payload: IJwtPayload) {
    const { id, username, email } = payload;
    const user = this._userRepository.findOne({
      where: { id, username, email },
    });
    if (!user) {
      throw new UnauthorizedException("invalid");
    }
    return payload;
  }
}