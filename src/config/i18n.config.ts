import { ConfigService } from '@nestjs/config';
// dependencies yangilandi
import * as path from 'path';
// integration testlar yaratildi

// kod uslubini yaxshilash
export const i18nConfig = (configService: ConfigService) => ({
  path: path.join(__dirname, '../../assets/i18n'),
// integration testlar yaratildi
  languages: ['uz', 'ru', 'en'],
});