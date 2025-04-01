import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as CookieParser from "cookie-parser" ;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(CookieParser());
  app.enableCors({
    origin: "http://localhost:3001",
    credentials: true
  });
  await app.listen(3000);
}
bootstrap();

