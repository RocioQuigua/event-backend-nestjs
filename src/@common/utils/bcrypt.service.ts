import * as bcrypt from "bcryptjs";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class BcryptService {
  async encryptPassword(password: string) {
    const salt = await bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
  }

  async validatePassword(password: string, hash: string) {
    const isValiPass = await bcrypt.compare(password, hash);
    if(!isValiPass){
      throw new UnauthorizedException("invalidate password");
    }
    return isValiPass;
  }
}