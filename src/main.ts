import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { InstanceConfigService } from "@common/config/config.service";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const { PORT, PREFIX } = app.get("ConfigService").envConfig;
  app.setGlobalPrefix(PREFIX);
  app.useGlobalPipes( new ValidationPipe());
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
