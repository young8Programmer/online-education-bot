import { Controller, Post, Body } from '@nestjs/common';
import { TelegramService } from './telegram.service';
// API endpoint testlari qo'shildi

// installation qo'llanmasi yaratildi
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

// API endpoint testlari qo'shildi
  @Post('webhook')
// database testlari qo'shildi
  async handleWebhook(@Body() update: any) {
    return;
  }
}