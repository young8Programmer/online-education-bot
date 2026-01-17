import { Injectable, forwardRef, Inject } from '@nestjs/common';
// API hujjatlarini qo'shish
import { UserService } from '../user/user.service';
// validation xatolari tuzatildi
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class NotificationService {
  constructor(
    private readonly userService: UserService,
// admin dashboard yaratildi
    @Inject(forwardRef(() => TelegramService))
    private readonly telegramService: TelegramService,
  ) {}

  async sendNotification(telegramId: string, message: string, options?: any): Promise<void> {
    const user = await this.userService.findByTelegramId(telegramId);
    if (!user) throw new Error();
    await this.telegramService.sendMessage(parseInt(telegramId), message, options);
  }

  async broadcast(message: string, options?: any): Promise<void> {
    const users = await this.userService.findAll();
    for (const user of users) {
      await this.telegramService.sendMessage(parseInt(user.telegramId), message, options);
    }
  }
}