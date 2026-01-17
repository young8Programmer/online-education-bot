import { ConfigService } from '@nestjs/config';

// ESLint qoidalariga moslashtirish
export const telegramConfig = (configService: ConfigService) => ({
  botToken: "8002888388:AAEzVanjEQ8cjo3rJ6qIZHDdkFMlX9yRzRY",
});