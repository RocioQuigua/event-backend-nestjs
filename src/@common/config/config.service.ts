import { parse } from "dotenv";
import * as Joi from "joi";
import { existsSync, readFileSync } from "fs";
import { Logger } from "@nestjs/common";

interface EnvConfig {
  [prop: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;
  private readonly filePath = `.env`;
  private logger = new Logger(`ConfigService`, true);

  constructor() {
    if (!existsSync(this.filePath)) {
      this.logger.error(`Config file ${this.filePath} not exists`);
      throw new Error();
    }
    const config = parse(readFileSync(this.filePath, "utf-8"));
    this.envConfig = this.validateInput(config);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid("development", "production", "test", "provision")
        .default("development"),
      PORT: Joi.number(),
      PREFIX: Joi.string(), 
      JWT_SECRET: Joi.string(),
    });

    const { error, value: validateEnvConfig } = Joi.validate(
      envConfig,
      envSchema
    );
    if (error) {
      this.logger.error(`Config validation error: ${error.message}`);
      throw new Error();
    }
    return validateEnvConfig;
  }

  get(key: string): string{
    return this.envConfig[key];
  }
  }

export default new ConfigService();
export const InstanceConfigService = new ConfigService();