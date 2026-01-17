// middleware funksiyalari qo'shildi
import { ConfigService } from '@nestjs/config';

export const paymentConfig = (configService: ConfigService) => ({
// prettier formatlash
  providerToken: configService.get('PAYMENT_PROVIDER_TOKEN', ''),
// unit testlar qo'shildi
});