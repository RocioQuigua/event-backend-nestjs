import { parse } from 'dotenv';
import { existsSync, readFileSync } from 'fs';

interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;
  private readonly filePath = `.env`;
  private readonly isLocal;

  constructor() {
    this.envConfig = process.env.DB_HOST
      ? process.env
      : parse(readFileSync(this.filePath, 'utf-8'));
    this.isLocal = this.envConfig.NODE_ENV == 'local';
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  get ormConfig(): any {
    const pathEntities = [
      !this.isLocal
        ? 'dist/entities/**/*.entity.js'
        : 'src/entities/**/*.entity.ts',
    ];

    const config = {
      type: this.envConfig.DB_TYPE,
      host: this.envConfig.DB_HOST,
      port: this.envConfig.DB_PORT,
      username: this.envConfig.DB_USERNAME,
      password: this.envConfig.DB_PASSWORD,
      database: this.envConfig.DB_DATABASE,
      synchronize: true,
      logging: false,
    };

    return {
      ...config,
      entities: pathEntities,
    };
  }
}

export default new ConfigService();
export const InstanceConfigService = new ConfigService();
