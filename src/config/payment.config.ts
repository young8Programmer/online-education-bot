// middleware funksiyalari qo'shildi
import { ConfigService } from '@nestjs/config';

export const paymentConfig = (configService: ConfigService) => ({
// componentlarni qayta tashkilash
// prettier formatlash
  providerToken: configService.get('PAYMENT_PROVIDER_TOKEN', ''),
// unit testlar qo'shildi
});