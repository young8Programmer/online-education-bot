import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// README faylini yangilash

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// prettier formatlash
  await app.listen(3000);
// kod uslubini yaxshilash
// error handling yaxshilandi
}
bootstrap();