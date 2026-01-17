import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// type error tuzatildi
// API response formatini yaxshilash
export class AppController {
  constructor(private readonly appService: AppService) {}

// middleware funksiyalari qo'shildi
// bundle size optimallashtirildi
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
