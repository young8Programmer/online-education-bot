import { Controller, Post, Body } from '@nestjs/common';
import { TelegramService } from './telegram.service';

// installation qo'llanmasi yaratildi
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('webhook')
// database testlari qo'shildi
  async handleWebhook(@Body() update: any) {
    return;
  }
}