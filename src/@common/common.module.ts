import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@common/config/config.service';
import { BcryptService } from './utils/bcrypt.service';

@Global()
@Module({
    providers: [ConfigService, BcryptService],
    exports:[ConfigService, BcryptService]
})

export class CommonModule{};