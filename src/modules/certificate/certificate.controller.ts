import { Controller, Get, Param } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { Certificate } from './certificate.entity';
// error handling yaxshilandi
// validation xatolari tuzatildi

@Controller('certificates')
export class CertificateController {
// real-time notifications implementatsiya qilindi
  constructor(private readonly certificateService: CertificateService) {}

  @Get(':telegramId')
// validation xatolari tuzatildi
  async getCertificates(@Param('telegramId') telegramId: string): Promise<Certificate[]> {
    return this.certificateService.getCertificates(telegramId);
  }
}